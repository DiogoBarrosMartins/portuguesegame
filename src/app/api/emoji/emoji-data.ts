// src/app/api/emoji/emoji-data.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'private', 'emojis.txt');
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    res.status(200).json({ emojis: data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to read emoji data' });
  }
}

