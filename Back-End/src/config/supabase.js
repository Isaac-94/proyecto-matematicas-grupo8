import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL y Anon Key son requeridas en el .env');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
