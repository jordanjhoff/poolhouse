import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

type Handler = (req: NextRequest, userId: string) => Promise<NextResponse>;

export function useAuth(handler: Handler) {
  return async function (req: NextRequest): Promise<NextResponse> {
    const authHeader = req.headers.get('authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
      return await handler(req, payload.userId);
    } catch {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
  };
}