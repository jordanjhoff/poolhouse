import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const pageParam = searchParams.get("page");
    const pageSizeParam = searchParams.get("pageSize");
  
    const page = parseInt(pageParam || "1", 10);
    const pageSize = parseInt(pageSizeParam || "10", 10);
    const skip = (page - 1) * pageSize;
  
    try {
      const [matches, total] = await Promise.all([
        prisma.matchV2.findMany({
          skip,
          take: pageSize,
          orderBy: { createdAt: "desc" },
          include: {
            player1: { select: { name: true } },
            player2: { select: { name: true } },
            winner: { select: { name: true } },
          },
        }),
        prisma.matchV2.count(),
      ]);
  
      return NextResponse.json({
        matches,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize),
        total,
      });
    } catch (error) {
      console.error("[GET /api/matchV2] Error:", error);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
  }