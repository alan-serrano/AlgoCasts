// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //if the string is empty return null
    if(str.length === 0) return null;

    // Initialize the max value
    var letters = {
        max: str[0]
    };

    for (const ch of str) {
        if(!letters.hasOwnProperty(ch)) {
            letters[ch] = 1;

        } else {
            letters[ch]++;
        }

        // Saving the max value in the object Letters
        if( letters[ch] > letters[letters.max] ) {
            letters.max = ch;
        }
    }

    return letters.max;
}

/* Solution 1 of the video */
function maxChar1(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (const char of str) {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    
    for (const char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar1;
