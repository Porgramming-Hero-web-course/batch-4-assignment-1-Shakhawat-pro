{
    function countWordOccurrences(sentence: string, word: string): number {
        const normalizedSentence = sentence.toLowerCase();
        const normalizedWord = word.toLowerCase();

        // Split the sentence into words, handling punctuation   \W+ remove all Non-Word Characters words
        const words = normalizedSentence.split(/\W+/)
        // console.log(words);
        return words.filter(w => w === normalizedWord).length;
    }

    console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")); // 2
    console.log(countWordOccurrences("The cat and another cat", "cat")); // 2
    console.log(countWordOccurrences("The Cat, cat, and CAT!", "cat")); // 3
}