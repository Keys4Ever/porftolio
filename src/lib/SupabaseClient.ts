import { createClient } from "@libsql/client";
import { config } from "dotenv";

// Cargar variables de entorno desde el archivo .env
config();

// Usar variables de entorno
const databaseUrl: string = process.env.DATABASE_URL as string;
const authToken: string = process.env.AUTH_TOKEN as string;

export const turso = createClient({
  url: databaseUrl,
  authToken: authToken
});
