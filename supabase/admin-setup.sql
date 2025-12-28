-- ============================================
-- Admin Panel Database Setup
-- Run this in Supabase SQL Editor
-- ============================================

-- ============================================
-- 1. ADMIN STATS VIEW
-- Aggregated statistics for admin dashboard
-- ============================================

CREATE OR REPLACE VIEW admin_dashboard_stats AS
SELECT 
  (SELECT COUNT(*) FROM profiles WHERE role = 'intern') as total_interns,
  (SELECT COUNT(DISTINCT user_id) FROM quiz_progress) as active_interns,
  (SELECT COUNT(*) FROM submissions) as total_submissions,
  (SELECT COUNT(*) FROM submissions WHERE status = 'completed') as completed_submissions,
  (SELECT COALESCE(AVG(score::float / total_questions * 100), 0) 
   FROM submissions WHERE status = 'completed') as average_score;

-- Grant access to authenticated users (will be filtered by RLS/API)
GRANT SELECT ON admin_dashboard_stats TO authenticated;

-- ============================================
-- 2. INTERN STATS VIEW
-- Per-intern statistics for admin panel
-- ============================================

CREATE OR REPLACE VIEW intern_stats AS
SELECT 
  p.id,
  p.email,
  p.full_name,
  p.created_at,
  COUNT(DISTINCT s.id) FILTER (WHERE s.status = 'completed') as quizzes_completed,
  COUNT(DISTINCT qp.quiz_id) as quizzes_in_progress,
  COALESCE(AVG(s.score::float / s.total_questions * 100) FILTER (WHERE s.status = 'completed'), 0) as average_score,
  MAX(GREATEST(s.completed_at, qp.last_updated)) as last_active_at
FROM profiles p
LEFT JOIN submissions s ON p.id = s.user_id
LEFT JOIN quiz_progress qp ON p.id = qp.user_id
WHERE p.role = 'intern'
GROUP BY p.id, p.email, p.full_name, p.created_at;

GRANT SELECT ON intern_stats TO authenticated;

-- ============================================
-- 3. RLS POLICY FOR ADMIN ACCESS TO SUBMISSIONS
-- Allow admins to view all submissions
-- ============================================

-- Drop existing policy if exists (to avoid conflict)
DROP POLICY IF EXISTS "Admins can view all submissions" ON submissions;

-- Create new policy for admin access
CREATE POLICY "Admins can view all submissions"
  ON submissions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- ============================================
-- 4. RLS POLICY FOR ADMIN ACCESS TO QUIZ PROGRESS
-- Allow admins to view all quiz progress
-- ============================================

-- Enable RLS on quiz_progress if not already enabled
ALTER TABLE quiz_progress ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if exists
DROP POLICY IF EXISTS "Admins can view all quiz progress" ON quiz_progress;

-- Create policy for admin access to quiz progress
CREATE POLICY "Admins can view all quiz progress"
  ON quiz_progress FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- ============================================
-- 5. RLS POLICY FOR ADMIN ACCESS TO LEADERBOARD
-- Allow admins to view all leaderboard entries
-- ============================================

-- Enable RLS on leaderboard if not already enabled
ALTER TABLE leaderboard ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if exists
DROP POLICY IF EXISTS "Admins can view all leaderboard entries" ON leaderboard;

-- Allow anyone to read leaderboard (it's public)
DROP POLICY IF EXISTS "Anyone can view leaderboard" ON leaderboard;
CREATE POLICY "Anyone can view leaderboard"
  ON leaderboard FOR SELECT
  TO authenticated
  USING (true);

-- ============================================
-- SETUP COMPLETE
-- ============================================

-- To create an admin account:
-- 1. First, have the user sign up through the normal signup flow
-- 2. Then, run this SQL to promote them to admin:
--
-- UPDATE profiles 
-- SET role = 'admin' 
-- WHERE email = 'admin@example.com';
--
-- Replace 'admin@example.com' with the actual admin email
