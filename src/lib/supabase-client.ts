import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables for frontend client.');
}

// Client for the frontend (browser). Uses the anon key.
export const supabaseClient = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);
