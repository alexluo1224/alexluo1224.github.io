import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

export const supabase = createClient(
  'https://yobswqcmjcmizxjqbgir.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvYnN3cWNtamNtaXp4anFiZ2lyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MTAyNDMsImV4cCI6MjA2OTE4NjI0M30.52BS9og0uSOKYt37gX414pE81rq9ZKIhHYHB0jiQwXw'
)