import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn('Missing Supabase environment variables. Database connections will fail.');
}

// Create a single supabase client for interacting with your database
// Note: We use the SERVICE_ROLE_KEY here since this is the backend orchestrator
// which requires admin access to bypass RLS (Row Level Security).
// NEVER expose this key to the frontend.
export const supabase = createClient(
  supabaseUrl || '',
  supabaseServiceKey || '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);
