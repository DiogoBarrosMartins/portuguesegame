// src/app/wordl/util.ts

export const words = [
    "amigo", // friend
    "carro", // car
    "porta", // door
    "casar",  // house
    "falar", // to speak
    "fruta", // fruit
    "mundo", // world
    "pazes",   // peace
    "lugar", // place
    "nuvem", // cloud
    "verde", // green
    "cinco", // five
    "livro", // book
    "papel", // paper
    "beijo", 
];
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
            remainingLetters[i] = ''; // Mark this letter as checked
        } else {
            feedback.push({ letter: guess[i], status: 'absent' });
        }
    }

    // Second pass: Check for correct letters in the wrong position
    for (let i = 0; i < 5; i++) {
        if (feedback[i].status === 'absent' && remainingLetters.includes(guess[i])) {
            feedback[i].status = 'present';
            remainingLetters[remainingLetters.indexOf(guess[i])] = ''; // Mark this letter as checked
        }
    }

    return feedback;
}

export const checkWordExists = async (word: string): Promise<boolean> => {
    try {
        const response = await fetch(`https://api.dicionario-aberto.net/word/${word}`);
        if (response.ok) {
            const data = await response.json();
            console.log('API Response:', data); // Log the response to debug
            return Array.isArray(data) && data.length > 0;
        } else {
            console.error('API responded with an error:', response.statusText);
        }
    } catch (error) {
        console.error('Error checking word:', error);
    }
    return false;
};
