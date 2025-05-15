import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  console.log("[GET /api/user] Incoming request");

  try {
    const userId = req.headers.get("userId") || "";
    const user = await prisma.userV2.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        rating: true,
        rd: true,
        volatility: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    if (!user) {
      console.warn("[GET /api/user] User not found");
      console.warn(user)
      return NextResponse.json({ error: "User not found"}, { status: 404 });
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
    
    return NextResponse.json({ user, matches, winCount, lossCount });
  } catch (error) {
    console.error("[GET /api/userV2] Error:", error);
    return NextResponse.json({ error: "Invalid token or server error" }, { status: 500 });
  }
}
