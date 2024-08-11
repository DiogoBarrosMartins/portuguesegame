"use client";

import React, { useState } from 'react';
import { getRandomWord, checkGuess } from './util';

const Game: React.FC = () => {
    const [targetWord, setTargetWord] = useState<string>(getRandomWord());
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [attempts, setAttempts] = useState<Array<{ letter: string, status: 'correct' | 'present' | 'absent' }[]>>([]);
    const maxAttempts = 6;

    const handleGuess = () => {
        if (currentGuess.length !== 5) {
            alert("Guess must be a 5-letter word!");
            return;
        }

        const feedback = checkGuess(currentGuess, targetWord);
        setAttempts([...attempts, feedback]);

        if (currentGuess === targetWord) {
            alert("Congratulations! You've guessed the word!");
            resetGame();
        } else if (attempts.length + 1 >= maxAttempts) {
            alert(`Game over! The word was ${targetWord}.`);
            resetGame();
        } else {
            setCurrentGuess('');
        }
    };

    const resetGame = () => {
        setTargetWord(getRandomWord());
        setAttempts([]);
        setCurrentGuess('');
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Wordle Clone</h1>
            <div id="board" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                {attempts.map((attempt, i) => (
                    <div key={i} className="row" style={{ display: 'flex', gap: '5px' }}>
                        {attempt.map(({ letter, status }, j) => (
                            <div
                                key={j}
                                className={`cell ${status}`}
                                style={{
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    border: '2px solid #ccc',
                                    backgroundColor:
                                        status === 'correct' ? 'green' :
                                        status === 'present' ? 'yellow' :
                                        'grey',
                                    color:
                                        status === 'present' ? 'black' : 'white',
                                }}
                            >
                                {letter}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div id="input" style={{ marginTop: '20px' }}>
                <input
                    type="text"
                    value={currentGuess}
                    onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())}
                    maxLength={5}
                    placeholder="Enter your guess"
                    style={{ fontSize: '18px', padding: '10px', width: '200px', textAlign: 'center', textTransform: 'uppercase' }}
                />
                <button
                    onClick={handleGuess}
                    style={{ fontSize: '18px', padding: '10px', marginLeft: '10px', cursor: 'pointer' }}
                >
                    Guess
                </button>
            </div>
        </div>
    );
};

export default Game;
