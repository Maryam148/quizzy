-- Add resume_count column to quiz_progress table
ALTER TABLE public.quiz_progress 
ADD COLUMN IF NOT EXISTS resume_count integer default 0;

-- Update existing rows to have resume_count = 0
UPDATE public.quiz_progress 
SET resume_count = 0 
WHERE resume_count IS NULL;
