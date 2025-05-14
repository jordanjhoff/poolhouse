import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const name = url.searchParams.get("name");

  if (!name) {
    return NextResponse.json({ error: "Name parameter is required" }, { status: 400 });
  }

  const user = await prisma.userV2.findFirst({
    where: {
      name: {
        equals: name,
        mode: "insensitive",
      },
    },
    select: {
      id: true,
      name: true,
      rating: true,
      rd: true,
      volatility: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const matches = await prisma.matchV2.findMany({
    where: {
      OR: [
        { player1Id: user.id },
        { player2Id: user.id }
      ]
    },
    include: {
      player1: {
        select: { id: true, name: true }
      },
      player2: {
        select: { id: true, name: true }
      },
      winner: {
        select: { id: true, name: true }
      }
    },
    orderBy: { createdAt: "desc" }
  });

  const winCount = await prisma.matchV2.count({
    where: {
      winnerId: user.id,
    }
  });

  const lossCount = await prisma.matchV2.count({
    where: {
      OR: [
        {
          player1Id: user.id,
          winnerId: {
            not: user.id, 
          },
        },
        {
          player2Id: user.id, 
          winnerId: {
            not: user.id, 
          },
        },
      ],
    },
  });

  return NextResponse.json({user, matches, winCount, lossCount});
}