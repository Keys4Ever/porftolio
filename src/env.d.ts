/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SUPABASE_URL: string;
    readonly SUPABASE_AUTH_TOKEN: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  