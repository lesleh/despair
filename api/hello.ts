export const config = {
  runtime: "edge", // this is a pre-requisite
};

export function GET(request: Request) {
  const stream = new ReadableStream({
    start(controller) {
      controller.enqueue("Streaming, world!");
      controller.close();
    },
  });

  return new Response(stream);
}
