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

  const secret = process.env.JWT_SECRET;
  const expirationTime = process.env.JWT_EXPIRATION_TIME || '1h'; 

  if (!secret) {
    return NextResponse.json({ error: 'Server error: JWT_SECRET not found' }, { status: 500 });
  }

  const token = jwt.sign(
    { userId: user.id, name: user.name },
    secret,             
    { expiresIn: expirationTime }
  );

  return NextResponse.json({ token });
}