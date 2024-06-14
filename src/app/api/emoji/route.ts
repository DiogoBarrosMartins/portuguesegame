// src/app/api/emoji/route.ts

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/app/api/emoji/emojis.txt');
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n').filter(line => line.trim() !== '');

  const sections: { title: string; pairs: { emoji: string; word: string; input: string }[] }[] = [];
  let currentSection: { title: string; pairs: { emoji: string; word: string; input: string }[] } | null = null;

  lines.forEach(line => {
    if (!line.includes('-')) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = { title: line, pairs: [] };
    } else if (currentSection) {
      const [word, emoji] = line.split(' - ');
      currentSection.pairs.push({ word, emoji, input: '' });
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return NextResponse.json(sections);
}
