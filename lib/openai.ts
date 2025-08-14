import OpenAI from 'openai';

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function createResponseStream(messages: Array<{ role: 'user'|'assistant'|'system'; content: string }>) {
  // Placeholder for Responses API when SDK updates; for now, use chat.completions if needed.
  const res = await openai.chat.completions.create({
    model: 'gpt-5',
    messages,
    stream: true,
  } as any);
  return res as any;
}
