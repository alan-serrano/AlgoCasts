// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // Create a map to store the vowels, the values are not important
    const vowels = {
        a: null,
        e: null,
        i: null,
        o: null,
        u: null
    }

    // Create a counter of the vowels
    let counter = 0;

    // Do a cycle for each character of the string
    // If the character is a vowel, increment the counter

    for (const ch of str.toLowerCase()) {
        if( vowels.hasOwnProperty(ch) ) counter++;
    }

    // return the counter
    return counter;
}

/* Solution 1 of the video */

function vowels1(str) {
    let count = 0;
    const checker = ['a', 'e', 'i', 'o', 'u'];

    for (const char of str.toLowerCase()) {
        if( checker.includes(char) ) {
            count++;
        }
    }

    return count;
}

/* Solution 2 of the video */

function vowels2(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels2;
