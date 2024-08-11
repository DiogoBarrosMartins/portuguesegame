"use client";

import React, { useState } from 'react';
import { getRandomWord, checkGuess } from './util';

const alphabet = 'qwertyuiopasdfghjklçzxcvbnm'.split('');

const Game: React.FC = () => {
    const [targetWord, setTargetWord] = useState<string>(getRandomWord());
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [attempts, setAttempts] = useState<Array<{ letter: string, status: 'correct' | 'present' | 'absent' }[]>>([]);
    const [keyboard, setKeyboard] = useState<Record<string, 'correct' | 'present' | 'absent' | ''>>(() =>
        Object.fromEntries(alphabet.map(letter => [letter, '']))
    );
    const [gameWon, setGameWon] = useState<boolean>(false);
    const maxAttempts = 6;

    const handleGuess = () => {
        if (currentGuess.length !== 5) {
            alert("A palavra deve ter 5 letras!");
            return;
        }

        let feedback = checkGuess(currentGuess, targetWord);

        if (currentGuess === targetWord) {
            feedback = feedback.map(f => ({ letter: f.letter, status: 'correct' }));
            setAttempts([...attempts, feedback]);
            setGameWon(true);
        } else if (attempts.length + 1 >= maxAttempts) {
            alert(`Fim de jogo! A palavra era ${targetWord}.`);
            resetGame();
        } else {
            setAttempts([...attempts, feedback]);
            updateKeyboard(feedback);
            setCurrentGuess('');
        }
    };

    const updateKeyboard = (feedback: { letter: string, status: 'correct' | 'present' | 'absent' }[]) => {
        const newKeyboard = { ...keyboard };
        feedback.forEach(({ letter, status }) => {
            if (newKeyboard[letter] !== 'correct') {
                newKeyboard[letter] = status;  // Update only if it's not already 'correct'
            }
        });
        setKeyboard(newKeyboard);
    };

    const handleKeyClick = (letter: string) => {
        if (currentGuess.length < 5) {
            setCurrentGuess(currentGuess + letter);
        }
    };

    const resetGame = () => {
        setTargetWord(getRandomWord());
        setAttempts([]);
        setCurrentGuess('');
        setKeyboard(Object.fromEntries(alphabet.map(letter => [letter, '']))); // Reset keyboard
        setGameWon(false);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
            <h1>Diogl</h1>
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
            {!gameWon && (
                <div id="input" style={{ marginTop: '20px' }}>
                    <input
                        type="text"
                        value={currentGuess}
                        onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())}
                        maxLength={5}
                        placeholder="Palavra"
                        style={{ fontSize: '18px', padding: '10px', width: '200px', textAlign: 'center', textTransform: 'uppercase' }}
                    />
                    <button
                        onClick={handleGuess}
                        style={{ fontSize: '18px', padding: '10px', marginLeft: '10px', cursor: 'pointer' }}
                    >
                        Adivinhar
                    </button>
                </div>
            )}
            {gameWon && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Parabéns! Você acertou a palavra: {targetWord.toUpperCase()}</h2>
                    <button
                        onClick={resetGame}
                        style={{ fontSize: '18px', padding: '10px', cursor: 'pointer' }}
                    >
                        Jogar Novamente
                    </button>
                </div>
            )}
            <div id="keyboard" style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }}>
                {alphabet.map(letter => (
                    <div
                        key={letter}
                        className={`key ${keyboard[letter]}`}
                        onClick={() => handleKeyClick(letter)}
                        style={{
                            width: '30px',
                            height: '30px',
                            margin: '2px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            borderRadius: '5px',
                            backgroundColor:
                                keyboard[letter] === 'correct' ? 'green' :
                                keyboard[letter] === 'present' ? 'yellow' :
                                keyboard[letter] === 'absent' ? 'grey' :
                                '#ddd',
                            color: keyboard[letter] ? 'white' : 'black',
                            cursor: 'pointer'
                        }}
                    >
                        {letter}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Game;
