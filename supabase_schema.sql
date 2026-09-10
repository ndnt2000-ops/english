-- ============================================================
-- ENGLISHMASTER - SUPABASE DATABASE SCHEMA & RLS POLICIES
-- ============================================================
-- Run this complete script in your Supabase SQL Editor:
-- (Supabase Dashboard -> SQL Editor -> New Query -> Run)

-- 1. Create table `profiles`
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Create table `user_progress`
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES public.profiles(id) ON DELETE CASCADE,
  level TEXT NOT NULL DEFAULT 'A1',
  xp INTEGER NOT NULL DEFAULT 0,
  streak INTEGER NOT NULL DEFAULT 0,
  hearts INTEGER NOT NULL DEFAULT 5,
  last_study_date TEXT,
  quiz_scores JSONB NOT NULL DEFAULT '[]'::jsonb,
  vocabulary_progress JSONB NOT NULL DEFAULT '{"mastered": [], "learning": [], "srsData": {}}'::jsonb,
  completed_lessons JSONB NOT NULL DEFAULT '{"reading": [], "listening": [], "grammar": [], "writing": [], "shadowing": [], "speaking": []}'::jsonb,
  badges JSONB NOT NULL DEFAULT '[]'::jsonb,
  activity_log JSONB NOT NULL DEFAULT '[]'::jsonb,
  raw_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- Create indexes for performant querying in Admin dashboard
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON public.user_progress(user_id);
CREATE INDEX IF NOT EXISTS idx_user_progress_level ON public.user_progress(level);
CREATE INDEX IF NOT EXISTS idx_user_progress_xp ON public.user_progress(xp DESC);

-- 3. Automatic Profile & Progress Trigger on User Signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- Insert into profiles
  INSERT INTO public.profiles (id, email, full_name, avatar_url, role)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', ''),
    'user'
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    full_name = COALESCE(EXCLUDED.full_name, public.profiles.full_name),
    avatar_url = COALESCE(EXCLUDED.avatar_url, public.profiles.avatar_url);

  -- Insert initial user_progress
  INSERT INTO public.user_progress (user_id, level, xp, streak, hearts, last_study_date)
  VALUES (NEW.id, 'A1', 0, 0, 5, to_char(now(), 'YYYY-MM-DD'))
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recreate trigger cleanly
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 4. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Helper function to check if the current requester is an Admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- --- RLS POLICIES FOR PROFILES ---
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id OR public.is_admin());

DROP POLICY IF EXISTS "Insert profile" ON public.profiles;
CREATE POLICY "Insert profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id OR public.is_admin());

-- --- RLS POLICIES FOR USER_PROGRESS ---
DROP POLICY IF EXISTS "Users can view own progress or Admin can view all" ON public.user_progress;
CREATE POLICY "Users can view own progress or Admin can view all"
  ON public.user_progress FOR SELECT
  USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users can update own progress or Admin can update" ON public.user_progress;
CREATE POLICY "Users can update own progress or Admin can update"
  ON public.user_progress FOR UPDATE
  USING (auth.uid() = user_id OR public.is_admin());

DROP POLICY IF EXISTS "Users can insert own progress" ON public.user_progress;
CREATE POLICY "Users can insert own progress"
  ON public.user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id OR public.is_admin());

-- 5. Helper view for Admin Analytics (with security_invoker = true to enforce RLS)
CREATE OR REPLACE VIEW public.admin_learners_overview 
WITH (security_invoker = true) AS
SELECT 
  p.id AS user_id,
  p.email,
  p.full_name,
  p.avatar_url,
  p.role,
  p.created_at AS joined_at,
  up.level,
  up.xp,
  up.streak,
  up.hearts,
  up.last_study_date,
  up.quiz_scores,
  up.vocabulary_progress,
  up.completed_lessons,
  up.badges,
  up.updated_at AS last_progress_update
FROM public.profiles p
LEFT JOIN public.user_progress up ON p.id = up.user_id
ORDER BY up.xp DESC NULLS LAST, p.created_at DESC;

-- Grant permissions to authenticated users
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON TABLE public.profiles TO anon, authenticated;
GRANT ALL ON TABLE public.user_progress TO anon, authenticated;
GRANT SELECT ON public.admin_learners_overview TO authenticated;

-- ============================================================
-- NOTE: TO MAKE YOUR FIRST USER AN ADMIN, RUN THIS COMMAND:
-- UPDATE public.profiles SET role = 'admin' WHERE email = 'your-email@example.com';
-- ============================================================
