import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface EmojiWordPair {
  emoji: string;
  word: string;
  input: string;
}

interface EmojiSection {
  title: string;
  pairs: EmojiWordPair[];
}

const readEmojiWords = async (): Promise<EmojiSection[]> => {
  const filePath = path.join(process.cwd(), 'emojis.txt');
  const data = fs.readFileSync(filePath, 'utf-8');
  const lines = data.split('\n').filter(line => line.trim() !== '');

  const sections: EmojiSection[] = [];
  let currentSection: EmojiSection | null = null;

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

  return sections;
};

export default readEmojiWords;
