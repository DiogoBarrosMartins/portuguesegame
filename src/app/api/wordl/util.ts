// src/app/wordl/util.ts

// List of 5-letter words
const words = ["apple", "grape", "melon", "berry", "peach", "lemon", "mango", "chess", "robot", "table"];

// Function to randomly select a word
export function getRandomWord(): string {
    return words[Math.floor(Math.random() * words.length)];
}
export function checkGuess(guess: string, targetWord: string): { letter: string, status: 'correct' | 'present' | 'absent' }[] {
    const feedback: { letter: string, status: 'correct' | 'present' | 'absent' }[] = [];
    let remainingLetters = targetWord.split('');

    // First pass: Check for correct letters in the correct position
    for (let i = 0; i < 5; i++) {
        if (guess[i] === targetWord[i]) {
            feedback.push({ letter: guess[i], status: 'correct' });
            remainingLetters[i] = ''; // Use an empty string instead of null to mark as used
        } else {
            feedback.push({ letter: guess[i], status: 'absent' });
        }
    }

    // Second pass: Check for correct letters in the wrong position
    for (let i = 0; i < 5; i++) {
        if (feedback[i].status === 'absent' && remainingLetters.includes(guess[i])) {
            feedback[i].status = 'present';
            remainingLetters[remainingLetters.indexOf(guess[i])] = ''; // Mark this letter as used
        }
    }

    return feedback;
}
