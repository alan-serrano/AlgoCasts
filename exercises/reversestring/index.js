// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/**
 * First Approach to the solution
 * Create an array with the size of the string
 * Do a for front to back and assign each letter to the array
 * @param {String} str String to reverse
 * @return {String} Return and string reversed 
 */
function reverse(str) {
    var tmp = new Array(str.length);

    for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
        tmp[j] = str[i];
    }

    return tmp.join("");
}

module.exports = reverse;
