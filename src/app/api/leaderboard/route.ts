import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const users = await prisma.userV2.findMany({
    select: {
      id: true,
      name: true,
      rating: true,
    },
  });

  const usersWithStats = await Promise.all(
    users.map(async (user) => {
      const winCount = await prisma.matchV2.count({
        where: {
          winnerId: user.id,
        },
      });
      console.log(user.name)
      const lossCount =
        (await prisma.matchV2.count({
          where: {
            AND: [{ player1Id: user.id }, { NOT: { winnerId: user.id } }],
          },
        })) +
        (await prisma.matchV2.count({
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

  usersWithStats.sort((a, b) => b.rating - a.rating);

  return NextResponse.json(usersWithStats);
}