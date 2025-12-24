# Quiz Web App - Setup Instructions

## Prerequisites
- Node.js 18+ installed
- Supabase account (https://supabase.com)
- npm or pnpm

## Installation Steps

### 1. Install Dependencies
All core dependencies are already installed:
- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ @supabase/ssr
- ✅ @supabase/supabase-js
- ✅ lucide-react
- ✅ zod & react-hook-form
- ✅ clsx & tailwind-merge

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# Get these from your Supabase project settings
# https://app.supabase.com/project/_/settings/api

NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Initialize shadcn/ui

First, initialize shadcn/ui in your project:

```bash
npx shadcn@latest init
```

When prompted, select:
- TypeScript: Yes
- Style: Default
- Base color: Slate (or your preference)
- CSS variables: Yes

### 4. Install shadcn/ui Components

Install the required UI components for the quiz app:

```bash
# Core form components
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add label
npx shadcn@latest add form

# Quiz interaction components
npx shadcn@latest add card
npx shadcn@latest add radio-group
npx shadcn@latest add progress

# Data display components
npx shadcn@latest add table
npx shadcn@latest add badge

# Modal and feedback components
npx shadcn@latest add dialog
npx shadcn@latest add separator
npx shadcn@latest add toast
```

Or install all at once:
```bash
npx shadcn@latest add button input label form card radio-group progress table badge dialog separator toast
```

### 5. Set Up Supabase Database

Create the following tables in your Supabase project:

#### profiles table
```sql
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  role text check (role in ('admin', 'intern')) not null default 'intern',
  full_name text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table profiles enable row level security;

-- Policies
create policy "Users can view own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on profiles for update
  using (auth.uid() = id);
```

#### quizzes table
```sql
create table quizzes (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  created_by uuid references profiles(id) on delete cascade not null,
  total_questions integer default 0,
  duration_minutes integer,
  passing_score integer,
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table quizzes enable row level security;

create policy "Anyone can view active quizzes"
  on quizzes for select
  using (is_active = true);

create policy "Admins can manage quizzes"
  on quizzes for all
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'admin'
    )
  );
```

#### questions table
```sql
create table questions (
  id uuid default gen_random_uuid() primary key,
  quiz_id uuid references quizzes(id) on delete cascade not null,
  text text not null,
  options jsonb not null,
  correct_option_index integer not null,
  order_index integer,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table questions enable row level security;

create policy "Anyone can view questions"
  on questions for select
  using (true);

create policy "Admins can manage questions"
  on questions for all
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'admin'
    )
  );
```

#### submissions table
```sql
create table submissions (
  id uuid default gen_random_uuid() primary key,
  quiz_id uuid references quizzes(id) on delete cascade not null,
  user_id uuid references profiles(id) on delete cascade not null,
  answers jsonb not null,
  score integer,
  passed boolean,
  submitted_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table submissions enable row level security;

create policy "Users can view own submissions"
  on submissions for select
  using (auth.uid() = user_id);

create policy "Users can create submissions"
  on submissions for insert
  with check (auth.uid() = user_id);

create policy "Admins can view all submissions"
  on submissions for select
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'admin'
    )
  );
```

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
quiz-app/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   │   ├── login/
│   │   └── signup/
│   ├── admin/             # Admin dashboard
│   │   └── quizzes/
│   ├── intern/            # Intern dashboard
│   │   └── quizzes/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                # shadcn/ui components
│   └── shared/            # Custom shared components
├── lib/
│   ├── supabase/
│   │   ├── server.ts     # Server-side Supabase client
│   │   ├── client.ts     # Client-side Supabase client
│   │   └── middleware.ts # Auth middleware helper
│   └── utils.ts          # Utility functions
├── types/
│   └── index.ts          # TypeScript definitions
└── middleware.ts         # Next.js middleware
```

## Next Steps

1. ✅ Project initialized with Next.js 14 + TypeScript
2. ✅ All dependencies installed
3. ✅ Folder structure created
4. ✅ TypeScript interfaces defined
5. ✅ Supabase clients configured
6. ⏳ Initialize shadcn/ui (run commands above)
7. ⏳ Set up Supabase database (run SQL commands above)
8. ⏳ Create `.env.local` with your Supabase credentials
9. ⏳ Build authentication pages
10. ⏳ Build quiz management (admin)
11. ⏳ Build quiz taking interface (intern)

## Terminal Commands Summary

```bash
# Initialize shadcn/ui
npx shadcn@latest init

# Install all required UI components
npx shadcn@latest add button input label form card radio-group progress table badge dialog separator toast

# Run development server
npm run dev
```
