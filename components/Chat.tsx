import React, { useState, useRef } from 'react';
export default function Chat(){
  const [msgs,setMsgs]=useState([{role:'assistant',content:'How can Blondie help?'}]);
  const [input,setInput]=useState('');
  const outRef=useRef<HTMLDivElement>(null);
  async function send(){
    const next=[...msgs,{role:'user',content:input},{role:'assistant',content:''}];
    setMsgs(next); setInput('');
    const res = await fetch('/api/respond',{method:'POST',body:JSON.stringify({messages:next.map(m=>({role:m.role,content:m.content}))})});
    const reader = res.body!.getReader(); const decoder=new TextDecoder(); let buf='';
    while(true){ const {value,done}=await reader.read(); if(done) break; buf += decoder.decode(value,{stream:true}); const parts=buf.split('\n\n'); buf=parts.pop()||''; for(const p of parts){ if(!p.startsWith('data:')) continue; const json=p.slice(5).trim(); if(!json) continue; const {token}=JSON.parse(json); if(token){ setMsgs(prev=>{ const copy=[...prev]; copy[copy.length-1]={...copy[copy.length-1], content:(copy[copy.length-1] as any).content + token}; return copy;}); } } }
  }
  return (<div style={{maxWidth:720,margin:'0 auto',padding:24}}><div style={{display:'grid',gap:12}}>{msgs.map((m,i)=>(<div key={i} style={{background:m.role==='assistant'? '#f7f7f8':'#eef6ff',padding:12,borderRadius:12}}>{m.content}</div>))}</div><div style={{display:'flex',gap:8,marginTop:16}}><input value={input} onChange={e=>setInput(e.target.value)} placeholder='Type a message' style={{flex:1,padding:12,borderRadius:20,border:'1px solid #ddd'}}/><button onClick={send}>Send</button></div></div>);
}
