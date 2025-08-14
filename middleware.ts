import type { NextRequest } from 'next/server';
export const config = { matcher: ['/((?!_next|api/hello|favicon.ico).*)'] };
export function middleware(_req: NextRequest) {
  return new Response(null, { status: 200, headers: { 'x-blondie': 'ok' } });
}
