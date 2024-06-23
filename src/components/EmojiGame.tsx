import React, { useState } from 'react';
import MaxWidthWrapper from "./MaxWidthWrapper";

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
    <MaxWidthWrapper className=''>
    <div className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-center">
      <div style={{ fontSize: '100px', alignItems:"center" }}>
        {emoji.emoji}
      </div>
      <div className="mt-5 w-full lg:w-auto">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full lg:w-auto text-center border-2 border-black p-2 text-2xl"
        />
      </div>
      {message && (
        <div className="mt-5 text-2xl text-green-500">
          {message}
        </div>
      )}
      <button
        onClick={handleShowAnswer}
        className="mt-5 text-2xl  text-black py-2 px-4 rounded hover:bg-green-300"
      >
        Reveal Answer
      </button>
      {showAnswer && (
        <div className="mt-5 text-2xl text-red-500">
          {emoji.word}
        </div>
      )}
    </div>
  </MaxWidthWrapper>
  
  );
};

export default EmojiGame;
