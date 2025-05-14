import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {

    const userId = req.headers.get('userId');
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { matchId } = await req.json();
    if (!matchId) {
      return NextResponse.json({ error: 'Match ID is required' }, { status: 400 });
    }

    const match = await prisma.matchV2.findUnique({
      where: { id: matchId },
    });
    if (!match) {
      return NextResponse.json({ error: 'Match not found' }, { status: 404 });
    }

    const {player1Id, player2Id, player1RatingBefore, player2RatingBefore, player1RdBefore, player2RdBefore } = match;
    if (player1Id !== userId && player2Id !== userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!match.undoable) {
        return NextResponse.json({ error: 'Match is not undoable' }, { status: 400 });
    }


    const [player1, player2] = await prisma.$transaction([
      prisma.userV2.update({
        where: { id: player1Id },
        data: { rating: player1RatingBefore, rd: player1RdBefore },
      }),
      prisma.userV2.update({
        where: { id: player2Id },
        data: { rating: player2RatingBefore, rd: player2RdBefore },
      }),
    ]);

    const undoneMatch = await prisma.matchV2.delete({
        where: { id: matchId },
      });

    return NextResponse.json({ undoneMatch }, { status: 200 });
  } catch (err) {
    console.error('Failed to undo match:', err);
    return NextResponse.json({ error: 'Failed to undo match' }, { status: 500 });
  }
};