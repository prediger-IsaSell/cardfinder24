import { NextRequest, NextResponse } from 'next/server';
import { getCardById } from '@/lib/cards';

export async function GET(
  request: NextRequest,
  { params }: { params: { card: string } }
) {
  const card = getCardById(params.card);

  if (!card) {
    return NextResponse.redirect(new URL('/', request.url), { status: 302 });
  }

  const from = request.nextUrl.searchParams.get('from') || 'unknown';
  console.log(
    JSON.stringify({
      event: 'affiliate_click',
      cardId: card.id,
      from,
      timestamp: new Date().toISOString(),
      referer: request.headers.get('referer') || null,
      userAgent: request.headers.get('user-agent') || null,
    })
  );

  return NextResponse.redirect(card.affiliateUrl, { status: 302 });
}
