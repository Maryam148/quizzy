# Quiz Enhancements - Setup Guide

This document covers the three major enhancements added to the quiz application.

## ✅ Enhancement 1: Persistence & Timers

### Features Implemented
- **localStorage Persistence**: Quiz progress automatically saved
- **Auto-Restore**: Resume from where you left off after refresh
- **Countdown Timer**: Visual timer with color warnings
- **Auto-Submit**: Automatically submits quiz when time expires

### How It Works

**useLocalStorage Hook** ([`hooks/useLocalStorage.ts`](file:///Users/shad/Downloads/quizzy%20quizzy/quiz-app/hooks/useLocalStorage.ts)):
```typescript
// Saves to localStorage automatically
const [answers, setAnswers, clearAnswers] = useLocalStorage(
  `quiz_answers_${quizId}`,
  {}
)
```

**useTimer Hook** ([`hooks/useTimer.ts`](file:///Users/shad/Downloads/quizzy%20quizzy/quiz-app/hooks/useTimer.ts)):
```typescript
const timer = useTimer({
  durationMinutes: 30,
  onTimeout: () => handleSubmit(), // Auto-submit
  quizId
})
```

**Timer Colors**:
- 🟢 Green: > 5 minutes remaining
- 🟡 Yellow: 1-5 minutes remaining  
- 🔴 Red: < 1 minute remaining

### Testing
1. Start a quiz with timer
2. Answer some questions
3. Refresh the page
4. ✅ Progress restored (same question, same answers)
5. ✅ Timer continues from where it left off

## ✅ Enhancement 2: Review Mode

### Features Implemented
- **Answer Review**: See all questions with your answers
- **Color Coding**: Green = correct, Red = incorrect
- **Correct Answers**: Shows which option was correct
- **Explanations**: Optional explanation field per question

### Pages Created
- [`app/quiz/[id]/review/page.tsx`](file:///Users/shad/Downloads/quizzy%20quizzy/quiz-app/app/quiz/[id]/review/page.tsx) - Review page

### How It Access

From **Results Page**:
```
View Score → Click "Review Answers" → See all questions
```

### What Interns See
- Each question with all options
- ✅ Green highlight on correct answer
- ❌ Red highlight on their wrong answer
- Badge: "Correct Answer" / "Your Answer"
- Explanation (if provided in question)

### Adding Explanations (Optional)

To add explanations to questions:

```sql
-- Add explanation column (run in Supabase SQL Editor)
ALTER TABLE questions 
ADD COLUMN explanation TEXT;
```

Then update questions:
```typescript
await supabase
  .from('questions')
  .update({ 
    explanation: 'A closure is a function that has access to variables in its outer scope...' 
  })
  .eq('id', questionId)
```

## ✅ Enhancement 3: Email Notifications

### Setup Required

**1. Choose Email Service**

Recommended: [Resend](https://resend.com) (free tier: 100 emails/day)

Alternatives:
- SendGrid
- Postmark
- AWS SES

**2. Install Dependencies**

```bash
npm install resend
```

**3. Get API Key**

1. Sign up at https://resend.com
2. Create API key
3. Add to `.env.local`:

```bash
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=admin@yourdomain.com
```

**4. Create Email Action**

Create `lib/email-actions.ts`:

```typescript
'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendQuizCompletionEmail(
  internName: string,
  internEmail: string,
  quizTitle: string,
  score: number,
  totalQuestions: number
) {
  const percentage = Math.round((score / totalQuestions) * 100)
  const passed = percentage >= 70

  try {
    await resend.emails.send({
      from: 'Quiz App <noreply@yourdomain.com>',
      to: process.env.ADMIN_EMAIL!,
      subject: `Quiz Completed: ${internName} - ${quizTitle}`,
      html: `
        <h2>New Quiz Submission</h2>
        <p><strong>Intern:</strong> ${internName} (${internEmail})</p>
        <p><strong>Quiz:</strong> ${quizTitle}</p>
        <p><strong>Score:</strong> ${score}/${totalQuestions} (${percentage}%)</p>
        <p><strong>Status:</strong> ${passed ? '✅ Passed' : '❌ Failed'}</p>
      `,
    })
  } catch (error) {
    console.error('Email error:', error)
  }
}
```

**5. Update submitQuiz Action**

In [`lib/submission-actions.ts`](file:///Users/shad/Downloads/quizzy%20quizzy/quiz-app/lib/submission-actions.ts), add after successful submission:

```typescript
// After successful grade_quiz
if (result.success) {
  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, email')
    .eq('id', user.id)
    .single()

  // Get quiz title
  const { data: quiz } = await supabase
    .from('quizzes')
    .select('title')
    .eq('id', quizId)
    .single()

  // Send email notification
  await sendQuizCompletionEmail(
    profile?.full_name || 'Unknown',
    profile?.email || 'unknown@example.com',
    quiz?.title || 'Unknown Quiz',
    result.score,
    result.totalQuestions
  )
}
```

### Alternative: Database Trigger (Advanced)

For automatic emails without modifying code, set up a Supabase Edge Function:

1. Create Edge Function
2. Set up database webhook
3. Trigger on `submissions` INSERT
4. Send email from Edge Function

See Supabase docs: https://supabase.com/docs/guides/functions

## 📋 Summary

| Enhancement | Status | Impact |
|-------------|--------|---------|
| Persistence & Timers | ✅ Implemented | Prevents lost progress |
| Review Mode | ✅ Implemented | Improves learning |
| Email Notifications | 📝 Setup Required | Admin workflow |

## 🧪 Testing Checklist

- [ ] Test localStorage persistence (refresh during quiz)
- [ ] Test timer countdown and warnings
- [ ] Test auto-submit on timeout
- [ ] Test review page from results
- [ ] Test explanations display (if added)
- [ ] Test email notifications (if configured)

---

Your quiz app now has enterprise-level features! 🚀
