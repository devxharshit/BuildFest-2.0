
import { createClient } from '@supabase/supabase-js';

// These lines pull the secret keys from your .env file safely
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// This creates the actual connection "client"
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
