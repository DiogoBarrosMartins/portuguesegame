// src/app/wordl/util.ts

export const words = [
    "amigo",
    "carro",
    "porta",
    "casar",
    "falar",
    "fruta",
    "mundo",
    "pazes",
    "lugar",
    "nuvem",
    "verde",
    "cinco",
    "livro",
    "papel",
    "beijo",
    "couro",
    "prato",
    "noite",
    "fraco",
    "peixe",
    "campo",
    "filho",
    "vidro",
    "limpo",
    "areia",
    "raiva",
    "gosto",
    "carta",
    "monte",
    "bravo",
    "trevo",
    "grito",
    "calma",
    "leite",
    "tigre",
    "tempo",
    "barco",
    "sonho",
    "vento",
    "casal",
    "jovem",
    "trigo",
    "pedra",
    "doido",
    "calor",
    "corpo",
    "roupa",
    "ponto",
    "gente",
    "primo",
    "campo",
    "trama",
    "dente",
    "banco",
    "fruta",
    "custo",
    "salto",
    "galho",
    "sinal",
    "vazio",
    "praia",
    "vapor",
    "circo",
    "tenso",
    "moral",
    "abuso",
    "preto",
    "letra",
    "firme",
    "garfo",
    "trago",
    "medir",
    "cerro",
    "cegas",
    "polvo",
    "virar",
    "lindo",
    "exato",
    "nariz",
    "bater",
    "lento",
    "astro",
    "moeda",
    "terno",
    "burro",
    "brisa",
    "ficar",
    "museu",
    "salva",
    "plano",
    "borda"
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
