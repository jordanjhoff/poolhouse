import prisma from '@/lib/prisma';

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

export async function createMatchAndUpdateRatings({
  player1Id,
  player2Id,
  winnerId,
}: {
  player1Id: string;
  player2Id: string;
  winnerId: string;
}) {
  if (!player2Id || !winnerId) {
    throw { status: 400, message: 'Missing required fields' };
  }

  if (![player1Id, player2Id].includes(winnerId)) {
    throw { status: 400, message: 'Winner must be one of the players' };
  }

  if (player1Id === player2Id) {
    throw { status: 400, message: 'Cannot play a match against yourself' };
  }

  const [player1, player2] = await Promise.all([
    prisma.userV2.findUnique({ where: { id: player1Id } }),
    prisma.userV2.findUnique({ where: { id: player2Id } }),
  ]);

  if (!player1 || !player2) {
    throw { status: 400, message: 'Player(s) not found' };
  }

  const result1 = winnerId === player1Id ? 1 : 0;
  const result2 = 1 - result1;

  const { newRating: rawR1, newRD: rawRD1 } = glickoUpdate(player1.rating, player1.rd, [
    { oppRating: player2.rating, oppRD: player2.rd, score: result1 },
  ]);
  const { newRating: rawR2, newRD: rawRD2 } = glickoUpdate(player2.rating, player2.rd, [
    { oppRating: player1.rating, oppRD: player1.rd, score: result2 },
  ]);

  const newR1 = Math.round(rawR1);
  const newR2 = Math.round(rawR2);
  console.log("KILLL MEEEEEEEEEEEEE")
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
      player1RdAfter: rawRD1,
      player2RdAfter: rawRD2,
      undoable: true, 
    },
  });
  
  console.log("Created match:", match); 
  

  await prisma.matchV2.updateMany({
    where: {
      undoable: true, 
      NOT: { id: match.id },  
      OR: [
        { player1Id },
        { player2Id },
      ],
    },
    data: {
      undoable: false,
    },
  });
  
  const updatedMatchesCount = await prisma.matchV2.count({
    where: {
      undoable: false,  
      NOT: { id: match.id },
      OR: [
        { player1Id },
        { player2Id },
      ],
    },
  });
  console.log(`Number of matches updated: ${updatedMatchesCount}`);
  
  await Promise.all([
    prisma.userV2.update({
      where: { id: player1Id },
      data: { rating: newR1, rd: rawRD1 },
    }),
    prisma.userV2.update({
      where: { id: player2Id },
      data: { rating: newR2, rd: rawRD2 },
    }),
  ]);
  
  console.log("Match created and ratings updated:", match);
  return match;
}