import { NextRequest } from 'next/server';
import { sseChunk } from '../../../lib/stream';
import { openaiStream } from '../../../lib/openai';
export const runtime='edge';
export async function POST(req:NextRequest){
  const { messages } = await req.json();
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller){
      controller.enqueue(encoder.encode(':\n\n'));
      await openaiStream(messages, (delta:any)=>{
        controller.enqueue(encoder.encode(sseChunk(delta)));
      });
      controller.close();
    }
  });
  return new Response(stream,{headers:{'Content-Type':'text/event-stream'}});
}
