import { turso } from "../../lib/SupabaseClient"
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({request, redirect }) => {
  const formData = await request.formData();
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const message = formData.get("message")?.toString();
  
  if (!email || !message || !name) {
    return new Response("Error:  Todos los campos son obligatorios", { status: 400 });
  }
  const result = await turso.execute({
    sql:"INSERT INTO Contact (name, email, message) VALUES  (?, ?, ?)",
    args:[name, email, message]
  });

  return redirect("/");
};
