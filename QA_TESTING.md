# Quiz App - QA Checklist & Test Plan

Complete testing guide for verifying all functionalities and security measures of the Antigravity Quiz application.

---

## 🔒 1. Critical Security Tests (The "Cheater's Check")

### Test 1.1: Verify Answer Protection (intern_questions View)

**Test Objective:** Confirm interns cannot access `correct_option_index` from network requests.

**Steps:**
1. Login as an **intern** (not admin)
2. Navigate to `/quiz/[quiz-id]`
3. Open **DevTools** (F12) → **Network** tab
4. Click "Clear" to reset network logs
5. Start answering questions
6. Filter network requests by "supabase" or "postgrest"
7. Find the request to `intern_questions`
8. Click on it → **Preview** or **Response** tab

**Expected Result:**
```json
{
  "id": "uuid",
  "quiz_id": "uuid",
  "question_text": "What is a closure?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "order_index": 0
  // ❌ NO correct_option_index field visible
}
```

**✅ PASS Criteria:** `correct_option_index` is NOT present in response  
**❌ FAIL Criteria:** `correct_option_index` is visible in network response

---

### Test 1.2: Verify Server-Side Grading

**Test Objective:** Confirm answers are validated on server, not client.

**Steps:**
1. Open quiz page as intern
2. Open **DevTools** → **Console**
3. Try to manipulate the submission:
```javascript
// Try to manually call submitQuiz with fake perfect score
// This should NOT work
await fetch('/api/submissions', {
  method: 'POST',
  body: JSON.stringify({
    quiz_id: 'uuid',
    score: 100,
    answers: {} // empty answers
  })
})
```
4. Check if submission was created with fake score

**Expected Result:**
- RLS policies block direct insertion
- Must use `grade_quiz()` RPC
- Score calculated on server only

**✅ PASS:** Direct submission blocked  
**❌ FAIL:** Can create submission with arbitrary score

---

### Test 1.3: Authentication Middleware Test

**Test Objective:** Verify unauthenticated users are redirected to `/login`.

**Steps:**
1. Open **Incognito/Private** browser window
2. Try to access these URLs directly:
   - `http://localhost:3000/dashboard`
   - `http://localhost:3000/admin/quizzes`
   - `http://localhost:3000/quiz/[any-quiz-id]`

**Expected Result:**
- All URLs redirect to `/login`
- User cannot bypass authentication

**✅ PASS:** Redirected to `/login` for all protected routes  
**❌ FAIL:** Can access protected routes without login

---

### Test 1.4: Role-Based Access Control

**Test Objective:** Verify interns cannot access admin routes.

**Steps:**
1. Login as **intern**
2. Try to access:
   - `/admin/quizzes`
   - `/admin/create`
   - `/admin/results`

**Expected Result:**
- Middleware redirects to `/dashboard`
- Cannot view admin pages

**Manual SQL Test:**
```sql
-- Verify user role
SELECT id, email, role FROM profiles WHERE email = 'test-intern@example.com';
-- Should show role = 'intern'
```

**✅ PASS:** Interns redirected to `/dashboard`  
**❌ FAIL:** Interns can access admin pages

---

## 🧪 2. Functional UI Tests

### Test 2.1: Quiz Creator - Empty Fields Validation

**Test Objective:** Verify quiz creation form validates required fields.

**Steps:**
1. Login as **admin**
2. Go to `/admin/create`
3. Try to submit with:
   - Empty title
   - Empty description
   - Empty question text
   - Less than 4 options
   - No questions added

**Expected Results:**
- Title < 5 chars → Error: "Title must be at least 5 characters"
- Description < 10 chars → Error message
- Empty question → Error: "Question must be at least 5 characters"
- < 4 options → Error: "Must have exactly 4 options"
- 0 questions → Error: "Quiz must have at least 1 question"

**✅ PASS:** All validations trigger  
**❌ FAIL:** Can submit invalid quiz

---

### Test 2.2: Quiz Creator - Correct Answer Selection

**Test Objective:** Ensure correct answer is required for each question.

**Steps:**
1. Create quiz with 1 question
2. Fill in question text and 4 options
3. **Do NOT select** correct answer radio button
4. Try to add another question or submit

**Expected Result:**
- Cannot proceed without selecting correct answer
- Radio group validation shows error

**✅ PASS:** Correct answer selection required  
**❌ FAIL:** Can save question without correct answer

---

### Test 2.3: Quiz Creator - Dynamic Question Management

**Test Objective:** Test add/remove question functionality.

**Steps:**
1. Click "Add Question" 3 times
2. Fill in details for all 3
3. Remove middle question
4. Submit quiz

**Expected Result:**
- Questions renumber automatically
- Removed question not in final quiz
- Only 2 questions saved

**SQL Verification:**
```sql
SELECT COUNT(*) FROM questions WHERE quiz_id = '[new-quiz-id]';
-- Should return 2
```

**✅ PASS:** Correct count, proper order  
**❌ FAIL:** Wrong count or order

---

### Test 2.4: Quiz Player - Progress Bar

**Test Objective:** Verify progress bar updates correctly.

**Steps:**
1. Start quiz with 10 questions
2. Answer question 1 → Check progress bar
3. Navigate to question 5 → Check progress bar
4. Navigate to question 10 → Check progress bar

**Expected Results:**
- Question 1: ~10% progress
- Question 5: ~50% progress
- Question 10: 100% progress

**✅ PASS:** Progress accurate  
**❌ FAIL:** Progress incorrect

---

### Test 2.5: Quiz Player - Submit Button Behavior

**Test Objective:** Verify submit only appears on last question.

**Steps:**
1. Start quiz
2. Check buttons on question 1
3. Navigate to last question
4. Check buttons

**Expected Results:**
- Questions 1-9: "Next" button visible
- Question 10: "Submit Quiz" button visible
- "Previous" disabled on Q1
- "Previous" enabled on Q2+

**✅ PASS:** Correct buttons shown  
**❌ FAIL:** Submit button appears early

---

### Test 2.6: Quiz Player - Answer Tracking

**Test Objective:** Verify answered questions are tracked visually.

**Steps:**
1. Answer questions 1, 3, 5 (skip 2, 4)
2. Check question grid at bottom

**Expected Results:**
- Questions 1, 3, 5: Green badges
- Questions 2, 4, 6-10: Gray badges
- Current question: Purple ring
- Count shows "3 / 10 answered"

**✅ PASS:** Visual indicators accurate  
**❌ FAIL:** Wrong colors or count

---

## ⚠️ 3. Edge Case Scenarios

### Test 3.1: Page Refresh During Quiz

**Test Objective:** Verify progress persists after refresh (Enhancement 1).

**Steps:**
1. Start quiz
2. Answer questions 1-5
3. **Refresh page (F5)**
4. Check state

**Expected Results:**
- Returns to question 5 (last viewed)
- Answers 1-5 still selected
- Timer continues (if enabled)
- localStorage contains quiz state

**DevTools Check:**
```javascript
// Open Console
localStorage.getItem('quiz_answers_[quiz-id]')
localStorage.getItem('quiz_index_[quiz-id]')
// Should show saved state
```

**✅ PASS:** All progress restored  
**❌ FAIL:** Progress lost

---

### Test 3.2: Timer Expiration

**Test Objective:** Test auto-submit when timer reaches 0 (Enhancement 1).

**Steps:**
1. Create quiz with 1-minute duration
2. Start quiz
3. Wait for timer to hit 0:00

**Expected Results:**
- Timer turns red at < 1 minute
- At 0:00: Toast appears "Time's Up!"
- Quiz auto-submits
- Redirects to results page

**✅ PASS:** Auto-submit works  
**❌ FAIL:** Stays on quiz or crashes

---

### Test 3.3: Network Failure During Submission

**Test Objective:** Handle grade_quiz RPC failure gracefully.

**Steps:**
1. Answer all questions
2. Open DevTools → **Network** tab
3. Set throttling to "Offline"
4. Click "Submit Quiz"

**Expected Results:**
- Shows error toast: "Failed to submit quiz"
- isSubmitting returns to false
- Submit button re-enabled
- User can retry when back online

**✅ PASS:** Error handled gracefully  
**❌ FAIL:** App crashes or hangs

---

### Test 3.4: Duplicate Submission Prevention

**Test Objective:** Prevent submitting same quiz twice.

**Steps:**
1. Complete quiz
2. View results
3. Try to access `/quiz/[id]` again directly

**Expected Results:**
- Middleware redirects to `/quiz/[id]/results`
- Cannot retake same quiz
- Submission table has UNIQUE constraint

**SQL Check:**
```sql
SELECT COUNT(*) FROM submissions 
WHERE user_id = '[user-id]' AND quiz_id = '[quiz-id]' AND status = 'completed';
-- Should return 1 (or 0 if not taken)
```

**✅ PASS:** Redirected to results  
**❌ FAIL:** Can retake quiz

---

### Test 3.5: Empty Answer Submission

**Test Objective:** Test submitting quiz with unanswered questions.

**Steps:**
1. Start quiz with 10 questions
2. Answer only 5 questions
3. Navigate to last question
4. Click "Submit Quiz"
5. Confirm in dialog

**Expected Results:**
- Dialog shows "You have answered 5 out of 10 questions"
- Can still submit
- Unanswered questions scored as incorrect
- Score is 0 for unanswered

**✅ PASS:** Handles partial submission  
**❌ FAIL:** Crashes or blocks submission

---

## 📊 4. Data Integrity Checks

### Test 4.1: Verify Submission Linking

**SQL Query to Run in Supabase:**

```sql
-- Check all submissions are correctly linked
SELECT 
  s.id AS submission_id,
  p.email AS intern_email,
  p.full_name AS intern_name,
  q.title AS quiz_title,
  s.score,
  s.total_questions,
  ROUND((s.score::FLOAT / s.total_questions) * 100, 2) AS percentage,
  s.status,
  s.completed_at
FROM submissions s
JOIN profiles p ON s.user_id = p.id
JOIN quizzes q ON s.quiz_id = q.id
WHERE s.status = 'completed'
ORDER BY s.completed_at DESC;
```

**Expected Result:**
- All rows have valid user_id
- All rows have valid quiz_id
- Score ≤ total_questions
- Percentage calculated correctly
- All completed submissions have completed_at timestamp

**✅ PASS:** All links valid  
**❌ FAIL:** Null values or orphaned records

---

### Test 4.2: Verify Score Calculation

**SQL Query:**

```sql
-- Manual score verification
SELECT 
  s.id,
  s.score AS recorded_score,
  s.total_questions,
  s.answers,
  (
    SELECT COUNT(*)
    FROM questions q
    WHERE q.quiz_id = s.quiz_id
    AND (s.answers->q.id::text)::int = q.correct_option_index
  ) AS calculated_score
FROM submissions s
WHERE s.id = '[submission-id]';
-- recorded_score should equal calculated_score
```

**Expected Result:**
- `recorded_score` = `calculated_score`
- Scores match manual calculation

**✅ PASS:** Scores match  
**❌ FAIL:** Discrepancy in scores

---

### Test 4.3: Verify RLS Policies

**SQL Queries:**

```sql
-- Test 1: Verify interns can only see their own submissions
SET LOCAL ROLE authenticated;
SET LOCAL "request.jwt.claims" = '{"sub": "[intern-user-id]"}';

SELECT COUNT(*) FROM submissions;
-- Should only return submissions for this user

-- Test 2: Verify interns cannot see correct answers
SELECT correct_option_index FROM questions WHERE quiz_id = '[quiz-id]';
-- Should return empty or error

-- Test 3: Verify intern_questions view works
SELECT * FROM intern_questions WHERE quiz_id = '[quiz-id]';
-- Should return questions WITHOUT correct_option_index
```

**✅ PASS:** RLS enforced correctly  
**❌ FAIL:** Can see other users' data

---

### Test 4.4: Verify Auto-Profile Creation

**Test Steps:**
1. Create new user via signup
2. Check profiles table

**SQL Query:**
```sql
-- Check if profile was auto-created
SELECT 
  id,
  email,
  role,
  full_name,
  created_at
FROM profiles
WHERE email = '[new-user-email]';
-- Should have 1 row with role = 'intern'
```

**Expected Result:**
- Profile exists
- Default role is 'intern'
- Created_at matches user signup time

**✅ PASS:** Profile auto-created  
**❌ FAIL:** No profile or wrong role

---

### Test 4.5: Verify Question Count Auto-Update

**Test Steps:**
1. Create quiz with 5 questions
2. Check quiz.total_questions
3. Add 2 more questions
4. Check again

**SQL Query:**
```sql
-- Check if total_questions auto-updates
SELECT 
  q.id,
  q.title,
  q.total_questions AS recorded_count,
  (SELECT COUNT(*) FROM questions WHERE quiz_id = q.id) AS actual_count
FROM quizzes q
WHERE q.id = '[quiz-id]';
-- recorded_count should equal actual_count
```

**Expected Result:**
- Counts match
- Trigger updates automatically

**✅ PASS:** Counts match  
**❌ FAIL:** Counts don't match

---

## 📋 Complete Testing Checklist

### Security Tests
- [ ] Intern cannot access correct_option_index from network
- [ ] Unauthenticated users redirected to /login
- [ ] Interns cannot access /admin routes
- [ ] Admins can access all routes
- [ ] Direct submission insertion blocked by RLS

### Functional Tests
- [ ] Quiz creation validates all fields
- [ ] Quiz creation requires correct answer selection
- [ ] Add/remove questions works correctly
- [ ] Progress bar updates accurately
- [ ] Submit button only on last question
- [ ] Answer tracking visual indicators work
- [ ] Search functionality in results table
- [ ] CSV export downloads correctly
- [ ] Detail view shows correct/incorrect answers

### Edge Cases
- [ ] Page refresh preserves quiz state
- [ ] Timer auto-submits at 0:00
- [ ] Network failure handled gracefully
- [ ] Duplicate submission prevented
- [ ] Partial quiz submission works

### Data Integrity
- [ ] All submissions linked correctly
- [ ] Scores calculated accurately
- [ ] RLS policies enforced
- [ ] Auto-profile creation works
- [ ] Question counts auto-update
- [ ] No orphaned records

### Enhancement Features
- [ ] localStorage persistence works
- [ ] Timer countdown displays correctly
- [ ] Timer color warnings (green/yellow/red)
- [ ] Review mode shows all questions
- [ ] Review mode highlights correct/incorrect
- [ ] Email notifications sent (if configured)

---

## 🐛 Bug Report Template

If any test fails, use this template:

**Test ID:** [e.g., Test 1.1]  
**Test Name:** [e.g., Verify Answer Protection]  
**Status:** ❌ FAILED  
**Expected:** [What should happen]  
**Actual:** [What actually happened]  
**Steps to Reproduce:**
1. Step 1
2. Step 2
3. Step 3

**Screenshots:** [If applicable]  
**Console Errors:** [Any errors in DevTools]  
**Priority:** High/Medium/Low

---

## ✅ Sign-Off Checklist

Before deploying to production:

- [ ] All security tests passing
- [ ] All functional tests passing
- [ ] All edge cases handled
- [ ] Data integrity verified
- [ ] RLS policies tested
- [ ] Email notifications configured (if using)
- [ ] Environment variables set
- [ ] Database schema deployed
- [ ] Admin user created and tested
- [ ] Intern user created and tested

**Tested By:** _________________  
**Date:** _________________  
**Version:** _________________  
**Ready for Production:** YES / NO

---

## 🚀 Production Deployment Checklist

- [ ] Run all SQL schema in production Supabase
- [ ] Set environment variables
- [ ] Test authentication flow
- [ ] Create first admin user
- [ ] Create test quiz
- [ ] Test complete user journey (signup → take quiz → review)
- [ ] Verify email notifications (if enabled)
- [ ] Check analytics dashboard
- [ ] Monitor error logs

**Your quiz app is production-ready when all tests pass!** ✅
