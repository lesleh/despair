export const config = {
  runtime: "edge", // this is a pre-requisite
};

export function GET(request: Request) {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      controller.enqueue(encoder.encode("Hello, World!"));
      controller.close();
    },
  });

  return new Response(stream);
}
