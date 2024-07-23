import { createClient } from "@libsql/client";

// Usar variables de entorno de Vite (necesitan el prefijo `PUBLIC_` para el cliente)
const databaseUrl = "libsql://saving-storm-cositoreal.turso.io";
const autHToken = "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MjE2ODEzMzQsImlkIjoiYTBiOTVhZjUtNmUyMC00OTI5LWE1MDItNjhmZWJlMzEzM2E4In0.F_rkK0JCnOHbHS8x9ZRMIIjnC-_bSfNuBH-f3k6t3oF1-l-jYDJbf_f9_jHi3UXpKYpgzFB2O5qLPJnxAqbWCg";

export const turso = createClient({
  url: databaseUrl,
  authToken: autHToken
}
  
);