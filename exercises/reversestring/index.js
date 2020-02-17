// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * Create an array with the size of the string
 * Do a for front to back and assign each letter to the array
 * @param {String} str String to reverse
 * @return {String} Return and string reversed 
 */
function reverseAlan(str) {
    var tmp = new Array(str.length);

    for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
        tmp[j] = str[i];
    }

    return tmp.join("");
}

/* SOLUTION 1 IN UDEMY */
function reverse1(str) {
    return str.split('').reverse().join('');
}

/* SOLUTION 2 IN UDEMY */
function reverse2(str) {
    let reversed = '';

    for (const character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

function reverse3(str) {
    return str.split('').reduce( (reversed, character) => character + reversed, '' )
}


/* Adding the solution for the test */
const reverse = reverse3;

module.exports = reverse;
