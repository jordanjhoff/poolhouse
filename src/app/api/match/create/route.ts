import { createMatchAndUpdateRatings } from '@/lib/createMatch';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  let payload: any;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET!);
  } catch {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  const player1Id = payload.userId;
  const { player2Id, winnerId } = await req.json();

  try {
    const match = await createMatchAndUpdateRatings({ player1Id, player2Id, winnerId });
    return NextResponse.json(match, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed' }, { status: err.status || 500 });
  }
}