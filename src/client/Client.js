


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://awfmgvycwwnktoapfaoy.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASEKEY
export const supabase = createClient(supabaseUrl, supabaseKey)