import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      elo: true,
    },
  });

  const usersWithStats = await Promise.all(
    users.map(async (user) => {
      const winCount = await prisma.match.count({
        where: {
          winnerId: user.id,
        },
      });

      const lossCount =
        (await prisma.match.count({
          where: {
            AND: [{ player1Id: user.id }, { NOT: { winnerId: user.id } }],
          },
        })) +
        (await prisma.match.count({
          where: {
            AND: [{ player2Id: user.id }, { NOT: { winnerId: user.id } }],
          },
        }));

      return {
        ...user,
        winCount,
        lossCount,
      };
    })
  );

  usersWithStats.sort((a, b) => b.elo - a.elo);

  return NextResponse.json(usersWithStats);
}