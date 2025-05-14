import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

const q = Math.log(10) / 400;

function g(rd: number): number {
  return 1 / Math.sqrt(1 + (3 * q * q * rd * rd) / (Math.PI * Math.PI));
}

function E(rating: number, oppRating: number, oppRD: number): number {
  return 1 / (1 + Math.pow(10, -g(oppRD) * (rating - oppRating) / 400));
}

function glickoUpdate(
  rating: number,
  rd: number,
  results: { oppRating: number; oppRD: number; score: number }[]
): { newRating: number; newRD: number } {
  if (results.length === 0) {
    const c = 50; 
    const newRD = Math.min(Math.sqrt(rd * rd + c * c), 350);
    return { newRating: rating, newRD };
  }

  const d2Inv = results.reduce((sum, { oppRating, oppRD }) => {
    const gRD = g(oppRD);
    const e = E(rating, oppRating, oppRD);
    return sum + (q * q) * gRD * gRD * e * (1 - e);
  }, 0);
  const d2 = 1 / d2Inv;

  const sum = results.reduce((acc, { oppRating, oppRD, score }) => {
    const gRD = g(oppRD);
    const e = E(rating, oppRating, oppRD);
    return acc + gRD * (score - e);
  }, 0);

  const newRating = rating + (q / ((1 / (rd * rd)) + (1 / d2))) * sum;
  const newRD = Math.sqrt(1 / ((1 / (rd * rd)) + (1 / d2)));

  return { newRating, newRD };
}

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

  if (!player2Id || !winnerId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (![player1Id, player2Id].includes(winnerId)) {
    return NextResponse.json({ error: 'Winner must be one of the players' }, { status: 400 });
  }

  if (player1Id === player2Id) {
    return NextResponse.json({ error: 'Cannot play a match against yourself' }, { status: 400 });
  }

  try {
    const [player1, player2] = await Promise.all([
      prisma.userV2.findUnique({ where: { id: player1Id } }),
      prisma.userV2.findUnique({ where: { id: player2Id } }),
    ]);

    if (!player1 || !player2) {
      return NextResponse.json({ error: 'Player(s) not found' }, { status: 400 });
    }

    const result1 = winnerId === player1Id ? 1 : 0;
    const result2 = 1 - result1;

    const { newRating: newR1, newRD: newRD1 } = glickoUpdate(player1.rating, player1.rd, [
      { oppRating: player2.rating, oppRD: player2.rd, score: result1 },
    ]);

    const { newRating: newR2, newRD: newRD2 } = glickoUpdate(player2.rating, player2.rd, [
      { oppRating: player1.rating, oppRD: player1.rd, score: result2 },
    ]);

    const match = await prisma.matchV2.create({
      data: {
        player1Id,
        player2Id,
        winnerId,
        player1RatingBefore: player1.rating,
        player2RatingBefore: player2.rating,
        player1RatingAfter: newR1,
        player2RatingAfter: newR2,
        player1RdBefore: player1.rd,
        player2RdBefore: player2.rd,
        player1RdAfter: newRD1,
        player2RdAfter: newRD2,
      },
    });

    await Promise.all([
      prisma.userV2.update({
        where: { id: player1Id },
        data: { rating: newR1, rd: newRD1 },
      }),
      prisma.userV2.update({
        where: { id: player2Id },
        data: { rating: newR2, rd: newRD2 },
      }),
    ]);

    return NextResponse.json(match, { status: 201 });
  } catch (err) {
    console.error('Failed to create match:', err);
    return NextResponse.json({ error: 'Failed to create match' }, { status: 500 });
  }
}
