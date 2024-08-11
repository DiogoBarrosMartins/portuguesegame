import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params?: { slug?: string } }) {
    const slug = params?.slug;

    if (!slug) {
        return new Response(JSON.stringify({ error: 'Slug is required' }), { status: 400 });
    }
    return NextResponse.json({ message: `You accessed Wordle game with slug: ${slug}` });
}