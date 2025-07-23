import { createClient } from '@supabase/supabase-js'

const URL = 'https://vpffauebutcbemzduwcp.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZwZmZhdWVidXRjYmVtemR1d2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMDY0ODksImV4cCI6MjA2ODg4MjQ4OX0.VBx8UXQYKo2IPRtHmU7i28B8GlBNf9A2sX7mGNcB1jI'

export const supabase = createClient(URL, API_KEY)