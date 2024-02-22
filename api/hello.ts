export function GET(request: Request) {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue("Streaming, world!");
      controller.close();
    },
  });

  return new Response(stream);
}
