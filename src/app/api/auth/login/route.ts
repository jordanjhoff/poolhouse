import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  const { name, password } = await req.json();

  const user = await prisma.userV2.findUnique({
    where: { name },
  });

  if (!user) {
    console.log("H0!")
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
    
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    console.log("HI!")
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const secret: jwt.Secret = process.env.JWT_SECRET!;

  if (!secret) {
    console.log("H0!")
    return NextResponse.json({ error: 'Server error: JWT_SECRET not found' }, { status: 500 });
  }

  const token = jwt.sign(
    { userId: user.id, name: user.name },
    secret
  );

  return NextResponse.json({ token });
}