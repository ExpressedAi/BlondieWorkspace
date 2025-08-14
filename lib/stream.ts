export function sseInit(){const headers=new Headers({
  'Content-Type':'text/event-stream',
  'Cache-Control':'no-cache',
  'Connection':'keep-alive'
}); return new Response(null,{headers});}
export function sseChunk(data:any){return `data: ${JSON.stringify(data)}\n\n`;}
