import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import { cookies } from 'next/headers';
import { encrypt } from '@/lib/session';

export async function POST(req: Request) {
  const { name, password } = await req.json();

  const user = await prisma.userV2.findUnique({
    where: { name },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const session = await encrypt({ userId: user.id, name: user.name });

  cookies().set('session', session, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  });

  return NextResponse.json({ message: 'Logged in' });
}