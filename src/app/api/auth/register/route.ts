import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { name, password } = await req.json();

  if (!name || !password) {
    return NextResponse.json({ error: 'Name and password are required.' }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({ where: { name } });
  if (existingUser) {
    return NextResponse.json({ error: 'Username already taken.' }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      password: hashedPassword,
    },
  });

  return NextResponse.json({ id: user.id, name: user.name });
}