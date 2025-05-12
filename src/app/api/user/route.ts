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

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user) {
      console.warn("[GET /api/user] User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const matches = await prisma.match.findMany({
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

    console.log("[GET /api/user] Returning user and matches");
    return NextResponse.json({ user, matches });
  } catch (error) {
    console.error("[GET /api/user] Error:", error);
    return NextResponse.json({ error: "Invalid token or server error" }, { status: 500 });
  }
}