import OpenAI from 'openai';
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export async function openaiStream(messages:any[], onDelta:(d:any)=>void){
  const res = await fetch('https://api.openai.com/v1/chat/completions',{
    method:'POST',
    headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.OPENAI_API_KEY}`},
    body: JSON.stringify({ model:'gpt-5', messages, stream:true })
  });
  const reader = (res as any).body.getReader();
  const decoder = new TextDecoder();
  let buf='';
  while(true){
    const {value,done} = await reader.read(); if(done) break;
    buf += decoder.decode(value,{stream:true});
    const events = buf.split('\n\n');
    buf = events.pop() || '';
    for(const ev of events){
      if(!ev.startsWith('data:')) continue;
      const payload = ev.slice(5).trim();
      if(payload === '[DONE]') return;
      try{
        const json = JSON.parse(payload);
        const token = json.choices?.[0]?.delta?.content;
        if(token) onDelta({ token });
      }catch{}
    }
  }
}
