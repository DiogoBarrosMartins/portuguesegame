"use client";

import React, { useState, useEffect } from 'react';
import { getRandomWord, checkGuess } from './util';

// QWERTY keyboard layout divided into rows
const qwertyRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'backspace'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ç', 'enter'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
];

const Game: React.FC = () => {
    const [targetWord, setTargetWord] = useState<string>(getRandomWord());
    const [currentGuess, setCurrentGuess] = useState<string>('');
    const [attempts, setAttempts] = useState<Array<{ letter: string, status: 'correct' | 'present' | 'absent' }[]>>([]);
    const [keyboard, setKeyboard] = useState<Record<string, 'correct' | 'present' | 'absent' | ''>>(() =>
        Object.fromEntries(qwertyRows.flat().map(letter => [letter, '']))
    );
    const [gameWon, setGameWon] = useState<boolean>(false);
    const maxAttempts = 6;

    useEffect(() => {
        const handlePhysicalKeyPress = (event: KeyboardEvent) => {
            const key = event.key.toLowerCase();
            if (key === 'enter') {
                handleGuess();
            } else if (key === 'backspace') {
                handleKeyClick('backspace');
            } else if (qwertyRows.flat().includes(key) && keyboard[key] !== 'absent') {
                handleKeyClick(key);
            }
        };

        window.addEventListener('keydown', handlePhysicalKeyPress);
        return () => {
            window.removeEventListener('keydown', handlePhysicalKeyPress);
        };
    }, [currentGuess, keyboard]);

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
                newKeyboard[letter] = status;  
            }
        });
        setKeyboard(newKeyboard);
    };

    const handleKeyClick = (letter: string) => {
        if (keyboard[letter] === 'absent') {
            return; // If the key is greyed out, do nothing
        }
        if (letter === 'backspace') {
            setCurrentGuess(currentGuess.slice(0, -1)); // Remove the last character
        } else if (letter === 'enter') {
            handleGuess(); // Submit the guess
        } else if (currentGuess.length < 5) {
            setCurrentGuess(currentGuess + letter);
        }
    };

    const resetGame = () => {
        setTargetWord(getRandomWord());
        setAttempts([]);
        setCurrentGuess('');
        setKeyboard(Object.fromEntries(qwertyRows.flat().map(letter => [letter, '']))); // Reset keyboard
        setGameWon(false);
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
            <h1>Diogl!</h1>
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
                        placeholder="5 letras"
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
            <div id="keyboard" style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '5px', marginLeft: 'auto', marginRight: 'auto' }}>
                {qwertyRows.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                        {row.map(letter => (
                            <div
                                key={letter}
                                className={`key ${keyboard[letter]}`}
                                onClick={() => handleKeyClick(letter)}
                                style={{
                                    width: letter === 'enter' || letter === 'backspace' ? '60px' : '30px', // Wider for enter and backspace
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
                                    cursor: keyboard[letter] === 'absent' ? 'not-allowed' : 'pointer', // Change cursor for absent keys
                                    pointerEvents: keyboard[letter] === 'absent' ? 'none' : 'auto', // Disable clicking for absent keys
                                }}
                            >
                                {letter === 'backspace' ? '←' : letter === 'enter' ? '↵' : letter} {/* Display appropriate icon */}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Game;
