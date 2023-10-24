
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://awfmgvycwwnktoapfaoy.supabase.co'
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASEKEY
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase