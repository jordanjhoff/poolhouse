import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { verify } from "jsonwebtoken";

export async function GET(req: Request) {
  console.log("[GET /api/user] Incoming request");

  const token = req.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    console.warn("[GET /api/user] No token provided");
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = verify(token, process.env.JWT_SECRET as string) as { userId: string };
    console.log("[GET /api/user] Decoded token:", decoded);

    const user = await prisma.userV2.findUnique({
      where: { id: decoded.userId },
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
    
    return NextResponse.json({ user, matches });
  } catch (error) {
    console.error("[GET /api/userV2] Error:", error);
    return NextResponse.json({ error: "Invalid token or server error" }, { status: 500 });
  }
}
