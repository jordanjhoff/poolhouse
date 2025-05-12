import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const name = url.searchParams.get("name");

  if (!name) {
    return NextResponse.json({ error: "Name parameter is required" }, { status: 400 });
  }

  const opponent = await prisma.user.findUnique({
    where: { name },
  });

  if (!opponent) {
    return NextResponse.json({ error: "Opponent not found" }, { status: 404 });
  }

  return NextResponse.json(opponent);
}