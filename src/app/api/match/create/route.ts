import { createMatchAndUpdateRatings } from '@/lib/createMatch';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
  const player1Id = req.headers.get('userId');
  console.log('Player 1 ID:', player1Id);
  if (!player1Id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { player2Id, winnerId } = await req.json();
  console.log('Player 2 ID:', player2Id);
  console.log('Winner ID:', winnerId);

  try {
    const match = await createMatchAndUpdateRatings({ player1Id, player2Id, winnerId });
    return NextResponse.json(match, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed' }, { status: err.status || 500 });
  }
}