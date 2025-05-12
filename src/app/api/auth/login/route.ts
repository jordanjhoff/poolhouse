import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const { name, password } = await req.json();

  const user = await prisma.user.findUnique({
    where: { name },
  });

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const secret: jwt.Secret = process.env.JWT_SECRET!;

  if (!secret) {
    return NextResponse.json({ error: 'Server error: JWT_SECRET not found' }, { status: 500 });
  }

  const token = jwt.sign(
    { userId: user.id, name: user.name },
    secret,
    { expiresIn: '30d' }
  );

  return NextResponse.json({ token });
}