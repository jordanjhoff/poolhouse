import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import jwt from 'jsonwebtoken';

function calculateKFactor(rating: number, gamesPlayed: number): number {
  if (gamesPlayed < 30) {
    return 40;
  } else if (rating < 2400) {
    return 20;
  } else {
    return 10;
  }
}

function calculateNewRating(currentRating: number, opponentRating: number, result: number, kFactor: number): number {
  const expectedScore = 1 / (1 + Math.pow(10, (opponentRating - currentRating) / 400));
  return currentRating + kFactor * (result - expectedScore);
}

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (!authHeader?.startsWith('Bearer ')) {
    console.warn('Missing or malformed Authorization header:', authHeader);
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];
  let payload: any;
  try {
    payload = jwt.verify(token, process.env.JWT_SECRET!);
  } catch (err) {
    console.error('JWT verification failed:', err);
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }

  const player1Id = payload.userId;
  let body;
  try {
    body = await req.json();
  } catch (err) {
    console.error('Failed to parse JSON body:', err);
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { player2Id, winnerId} = body;

  if (!player2Id || !winnerId) {
    console.warn('Missing fields:', { player2Id, winnerId});
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  if (![player1Id, player2Id].includes(winnerId)) {
    console.warn('Invalid winner ID:', winnerId);
    return NextResponse.json({ error: 'Winner must be one of the players' }, { status: 400 });
  }

  if (player1Id === player2Id) {
    console.warn('Player tried to create a match against themselves:', player1Id);
    return NextResponse.json({ error: 'Cannot play a match against yourself' }, { status: 400 });
  }

  try {
    const player1 = await prisma.user.findUnique({
      where: { id: player1Id },
      include: { matches1: true, matches2: true },
    });
    const player2 = await prisma.user.findUnique({
      where: { id: player2Id },
      include: { matches1: true, matches2: true },
    });

    if (!player1 || !player2) {
      console.warn('Player not found:', { player1Id, player2Id });
      return NextResponse.json({ error: 'Player(s) not found' }, { status: 400 });
    }

    const player1GamesPlayed = player1.matches1.length + player1.matches2.length;
    const player2GamesPlayed = player2.matches1.length + player2.matches2.length;

    const player1KFactor = calculateKFactor(player1.elo, player1GamesPlayed);
    const player2KFactor = calculateKFactor(player2.elo, player2GamesPlayed);

    const resultPlayer1 = winnerId === player1Id ? 1 : 0;
    const resultPlayer2 = winnerId === player2Id ? 1 : 0;

    const newPlayer1Elo = calculateNewRating(player1.elo, player2.elo, resultPlayer1, player1KFactor);
    const newPlayer2Elo = calculateNewRating(player2.elo, player1.elo, resultPlayer2, player2KFactor);

    const player1eloChangeCalculated = newPlayer1Elo - player1.elo;
    const player2eloChangeCalculated = newPlayer2Elo - player2.elo;

    const match = await prisma.match.create({
      data: {
        player1Id,
        player2Id,
        winnerId,
        player1eloChange: player1eloChangeCalculated,
        player2eloChange: player2eloChangeCalculated,
      },
    });

    await prisma.user.update({
      where: { id: player1Id },
      data: { elo: newPlayer1Elo },
    });

    await prisma.user.update({
      where: { id: player2Id },
      data: { elo: newPlayer2Elo },
    });

    console.info('Match created successfully:', match);
    return NextResponse.json(match, { status: 201 });
  } catch (err) {
    console.error('Failed to create match:', err);
    return NextResponse.json({ error: 'Failed to create match' }, { status: 500 });
  }
}