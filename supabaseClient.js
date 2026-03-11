// ── Supabase Client Configuration ────────────────────────────────────
// Replace the placeholder values below with your actual Supabase project credentials.
// Get them from: https://app.supabase.com → Your Project → Settings → API
//
// Required database schema (run in Supabase SQL Editor):
//
//   CREATE TABLE submissions (
//     id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//     name TEXT NOT NULL,
//     high_school TEXT,
//     yeshiva TEXT NOT NULL,
//     email TEXT,
//     status TEXT CHECK (status IN ('pending','approved','flagged','rejected')) DEFAULT 'pending',
//     flagged_reason TEXT,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
//     ip_hash TEXT
//   );
//
//   -- Enable Row-Level Security
//   ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
//
//   -- Allow public read of approved entries
//   CREATE POLICY "Public read approved"
//     ON submissions FOR SELECT
//     USING (status = 'approved');
//
//   -- Allow anyone to insert (anon key)
//   CREATE POLICY "Public insert"
//     ON submissions FOR INSERT
//     WITH CHECK (true);
//
//   -- Allow admin to update (service role key only)
//   CREATE POLICY "Admin update"
//     ON submissions FOR UPDATE
//     USING (auth.role() = 'service_role');

const SUPABASE_URL = 'https://ljujfzodedvqqstwtmpi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqdWpmem9kZWR2cXFzdHd0bXBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNDIzNTIsImV4cCI6MjA4ODcxODM1Mn0.vbgljIVf17T2clwGbvWm_0uAFlo-rMKRq4JSbhwWDo0';

// Initialize the client only when real credentials are provided.
// The app checks `supabaseDB !== null` before making any DB calls,
// so the site continues to work without a configured Supabase project
// (falling back to localStorage-only behaviour).
const supabaseDB =
  SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
  SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY' &&
  typeof window.supabase !== 'undefined'
    ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;
