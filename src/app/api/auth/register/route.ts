import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  const { name, password } = await req.json();

  if (!name || !password) {
    return NextResponse.json({ error: 'Name and password are required.' }, { status: 400 });
  }

  const existingUser = await prisma.userV2.findFirst({
    where: {
      name: {
        equals: name,
        mode: 'insensitive',
      },
    },
  });

  if (existingUser) {
    return NextResponse.json({ error: 'Username already taken.' }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.userV2.create({
    data: {
      name, 
      password: hashedPassword,
    },
  });

  return NextResponse.json({ id: user.id, name: user.name });
}