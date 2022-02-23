const port = parseInt(Deno.env.get('PORT') ?? '8000');
const listener = Deno.listen({ port: port });

console.log(`http://localhost:/${port}`);

for await (const conn of listener) {
  serve(conn);
}

async function serve(conn: Deno.Conn) {
  for await (const { respondWith } of Deno.serveHttp(conn)) {
    respondWith(new Response("Hello deno 🦕"));
  }
}

