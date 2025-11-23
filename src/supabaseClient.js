import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://asmkqiadsvsohihwxrqg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFzbWtxaWFkc3Zzb2hpaHd4cnFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM4NzcwNjEsImV4cCI6MjA3OTQ1MzA2MX0.8HsZxkk3Ri2JrVg3nxKofOXswdBDQrvqs-PbFVbr7Yo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
