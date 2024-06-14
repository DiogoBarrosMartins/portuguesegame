import React, { useState } from 'react';

const EmojiGame = ({ emoji, onCorrect }: { emoji: { emoji: string; word: string; input: string }, onCorrect: () => void }) => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (newValue.toLowerCase() === emoji.word.toLowerCase()) {
      setMessage('Correct!');
      onCorrect();
      setInputValue(''); // Clear the input after correct answer
      setShowAnswer(false); // Hide the answer after correct answer
    } else {
      setMessage('');
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '8%' }}>
      <div style={{ fontSize: '100px' }}>{emoji.emoji}</div>
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          style={{ fontSize: '24px', textAlign: 'center', border: '2px solid black' }}
        />
      </div>
      {message && <div style={{ marginTop: '20px', fontSize: '24px', color: 'green' }}>{message}</div>}
      <button onClick={handleShowAnswer} style={{ marginTop: '20px', fontSize: '24px' }}>Reveal Answer</button>
      {showAnswer && <div style={{ marginTop: '20px', fontSize: '24px', color: 'red' }}>{emoji.word}</div>}
    </div>
  );
};

export default EmojiGame;
