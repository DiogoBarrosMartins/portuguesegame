import { useState, useEffect } from 'react';

const useEmojiGame = () => {
  const [sections, setSections] = useState<{ title: string; pairs: { emoji: string; word: string; input: string }[] }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/emoji/emojis.txt');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setSections(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    };

    fetchData();
  }, []);

  return { sections, error };
};

export default useEmojiGame;
