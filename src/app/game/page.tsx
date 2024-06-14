"use client";

import React, { useEffect, useState } from 'react';
import EmojiGame from '@/components/EmojiGame';

const GamePage = () => {
  const [emoji, setEmoji] = useState<{ emoji: string; word: string; input: string; section: string } | null>(null);
  const [score, setScore] = useState(0);

  const fetchRandomEmoji = async () => {
    const response = await fetch('/api/emoji');
    const data = await response.json();

    if (data.length > 0) {
      const allPairs = data.flatMap((section: { title: string, pairs: any }) => 
        section.pairs.map((pair: any) => ({ ...pair, section: section.title }))
      );
      if (allPairs.length > 0) {
        const randomIndex = Math.floor(Math.random() * allPairs.length);
        const randomEmoji = allPairs[randomIndex];
        setEmoji(randomEmoji);
      }
    }
  };

  useEffect(() => {
    fetchRandomEmoji();
  }, []);

  const handleCorrect = () => {
    setScore((prevScore) => prevScore + 10);
    fetchRandomEmoji();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div style={{ fontSize: '24px', marginBottom: '20px' }}>Score: {score}</div>
      {emoji ? (
        <div>
          <div style={{ fontSize: '62px', marginBottom: '10px' }}>{emoji.section}</div>
          <EmojiGame emoji={emoji} onCorrect={handleCorrect} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GamePage;
