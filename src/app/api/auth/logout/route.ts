import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  const res = NextResponse.json({ message: 'Logged out' });

  res.headers.set(
    'Set-Cookie',
    serialize('session', '', {
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
      expires: new Date(0),
      secure: process.env.NODE_ENV === 'production',
    })
  );

  return res;
}