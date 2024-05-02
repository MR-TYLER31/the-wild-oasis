import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fotowzodwxkadqugypzi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvdG93em9kd3hrYWRxdWd5cHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI4NTczOTAsImV4cCI6MjAyODQzMzM5MH0.ItgUmJoFuimEY14C9glZFgSGyyq-d1uLFkgLeNrgMz8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
