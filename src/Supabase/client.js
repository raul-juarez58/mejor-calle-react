import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hdktpgfjaotvdthessdl.supabase.co";

const supabaseKey = "sb_publishable_fUq0M3ed8n2DRRtRzrfHbw_o9cXFNrP";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);