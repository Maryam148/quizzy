# Supabase Database Schema - Setup Guide

This guide explains how to set up the secure database schema for the Quiz Web App.

## 🔐 Security Features

### **Anti-Cheating Layer**
- ✅ **RLS Policies**: Role-based access control
- ✅ **Secure View**: `intern_questions` hides correct answers
- ✅ **Server-Side Grading**: `grade_quiz()` RPC prevents answer tampering
- ✅ **Network Inspection Proof**: Interns cannot see answers in browser tools

## 📋 Setup Instructions

### 1. Open Supabase SQL Editor

1. Go to your Supabase project: https://app.supabase.com
2. Navigate to **SQL Editor** in the sidebar
3. Click **New Query**

### 2. Run the Schema

Copy the entire contents of [`schema.sql`](file:///Users/shad/Downloads/quizzy%20quizzy/quiz-app/supabase/schema.sql) and paste it into the SQL Editor, then click **Run**.

This will create:
- ✅ `user_role` enum ('admin', 'intern')
- ✅ 4 tables with RLS enabled
- ✅ All security policies
- ✅ `intern_questions` view
- ✅ Auto-profile creation trigger
- ✅ `grade_quiz()` RPC function
- ✅ Performance indexes

## 📊 Database Structure

### Tables

#### `profiles`
- Links to `auth.users`
- Stores user role (admin/intern)
- Auto-created on signup via trigger

#### `quizzes`
- Created by admins only
- Contains quiz metadata
- Tracks total questions, duration, passing score

#### `questions`
- Linked to quizzes
- Contains `correct_option_index` (hidden from interns)
- Options stored as JSONB array

#### `submissions`
- User quiz attempts
- Stores answers, score, and status
- Unique constraint prevents duplicate submissions

### Security Views

#### `intern_questions`
**Purpose**: Prevent answer leakage via network inspection

```sql
-- Interns query this view instead of questions table
SELECT * FROM intern_questions WHERE quiz_id = 'xxx';
```

Excludes: `correct_option_index`

## 🔒 Row Level Security (RLS)

### Profiles
- ✅ Anyone can **read** all profiles
- ✅ Users can **update** only their own profile

### Quizzes
- ✅ Authenticated users can **read** active quizzes
- ✅ Only **admins** can create/update/delete

### Questions
- ✅ **Admins** see all fields (including answers)
- ✅ **Interns** use `intern_questions` view (no answers)

### Submissions
- ✅ **Interns** see only their own submissions
- ✅ **Admins** see all submissions

## ⚙️ Key Functions

### `handle_new_user()`
**Auto-creates profile when user signs up**

```sql
-- Triggered automatically on user signup
-- No manual intervention needed
```

### `grade_quiz(quiz_id, user_id, answers)`
**Server-side quiz grading (anti-cheat)**

**Usage from Next.js:**
```typescript
import { createClient } from '@/lib/supabase/client'

const supabase = createClient()

const { data, error } = await supabase.rpc('grade_quiz', {
  p_quiz_id: quizId,
  p_user_id: userId,
  p_answers: {
    'question-id-1': 2,  // Selected option index
    'question-id-2': 0,
    'question-id-3': 1
  }
})

// Returns: { submission_id, score, total_questions, passed }
```

**Why it's secure:**
- Answers are compared on the server
- Frontend never receives correct answers
- Network inspection reveals nothing

### `update_quiz_question_count()`
**Auto-updates quiz.total_questions**

```sql
-- Triggered automatically when questions are added/removed
-- Keeps quiz metadata in sync
```

## 🎯 Usage Examples

### Admin: Create a Quiz

```typescript
// 1. Insert quiz
const { data: quiz } = await supabase
  .from('quizzes')
  .insert({
    title: 'JavaScript Basics',
    description: 'Test your JS knowledge',
    duration_minutes: 30,
    passing_score: 7
  })
  .select()
  .single()

// 2. Add questions
const questions = [
  {
    quiz_id: quiz.id,
    question_text: 'What is a closure?',
    options: ['A function', 'An object', 'A loop', 'A variable'],
    correct_option_index: 0,
    order_index: 0
  },
  // ... more questions
]

await supabase.from('questions').insert(questions)
```

### Intern: View Quiz Questions (Secure)

```typescript
// Use the secure view - no answers exposed!
const { data: questions } = await supabase
  .from('intern_questions')  // ← Secure view
  .select('*')
  .eq('quiz_id', quizId)
  .order('order_index')

// Returns: { id, quiz_id, question_text, options }
// Does NOT include: correct_option_index
```

### Intern: Submit Quiz

```typescript
// Collect user answers
const answers = {
  'question-uuid-1': 2,  // User selected option 2
  'question-uuid-2': 0,  // User selected option 0
  'question-uuid-3': 1   // User selected option 1
}

// Grade via RPC (server-side)
const { data: result } = await supabase.rpc('grade_quiz', {
  p_quiz_id: quizId,
  p_user_id: currentUser.id,
  p_answers: answers
})

// result = { 
//   submission_id: 'uuid',
//   score: 8,
//   total_questions: 10,
//   passed: true 
// }
```

### Admin: View Submissions

```typescript
// Admins can see all submissions
const { data: submissions } = await supabase
  .from('submissions')
  .select(`
    *,
    profiles:user_id (full_name, email),
    quizzes:quiz_id (title)
  `)
  .eq('quiz_id', quizId)
  .order('score', { ascending: false })
```

## 🧪 Testing the Security

### Test 1: Intern Cannot See Answers
```typescript
// This will fail for interns (RLS blocks it)
const { data, error } = await supabase
  .from('questions')  // Direct table access
  .select('correct_option_index')

// error: "new row violates row-level security policy"
```

### Test 2: Intern Cannot Tamper with Grading
```typescript
// Client-side "hacking" attempt - will fail
const { error } = await supabase
  .from('submissions')
  .insert({
    score: 100,  // Trying to set score manually
    status: 'completed'
  })

// Must use grade_quiz() RPC instead
```

### Test 3: Only Admins Create Quizzes
```typescript
// As intern, this will fail
const { error } = await supabase
  .from('quizzes')
  .insert({ title: 'Hacked Quiz' })

// error: "new row violates row-level security policy"
```

## 📁 Files

- [`schema.sql`](file:///Users/shad/Downloads/quizzy%20quizzy/quiz-app/supabase/schema.sql) - Complete database schema
- [`SUPABASE_SETUP.md`](file:///Users/shad/Downloads/quizzy%20quizzy/quiz-app/supabase/SUPABASE_SETUP.md) - This guide

## ✅ Verification Checklist

After running the schema, verify:

- [ ] Tables created: `profiles`, `quizzes`, `questions`, `submissions`
- [ ] RLS enabled on all tables
- [ ] View created: `intern_questions`
- [ ] Functions created: `handle_new_user`, `grade_quiz`, `update_quiz_question_count`
- [ ] Triggers created: `on_auth_user_created`, `update_quiz_count_on_question_change`

## 🚀 Next Steps

1. **Test signup** - Create a user and verify profile auto-creation
2. **Assign admin role** - Update a user's role to 'admin' in profiles table
3. **Create sample quiz** - Test quiz creation as admin
4. **Test intern flow** - View quiz as intern, verify answers are hidden
5. **Test quiz submission** - Grade quiz using `grade_quiz()` RPC

---

Your database is now secure and ready for development! 🎉
