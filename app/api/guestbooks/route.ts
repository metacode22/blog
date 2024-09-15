import { NextRequest, NextResponse } from 'next/server';

import { prisma } from '@/src/utils/prisma';
import { stringifyBigIntId } from '@/src/utils/stringify-big-int-id';

export async function GET() {
  const guestbooks = (await prisma.guestbook.findMany())
    .map(stringifyBigIntId)
    .sort((a, b) => b.created_at.getTime() - a.created_at.getTime());

  return NextResponse.json({ guestbooks });
}

export async function POST(request: NextRequest) {
  const { name, message } = await request.json();

  const guestbook = await prisma.guestbook.create({
    data: {
      name,
      message,
    },
  });

  return NextResponse.json({ guestbook: stringifyBigIntId(guestbook) });
}
