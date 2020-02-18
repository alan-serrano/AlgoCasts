// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt0(n) {
    var numberToString, numberReversed;
    if(n>=0) {

        // convert the number to a string
        numberToString = `${n}`;

        // Reverse the string
        reversed = numberToString.split('').reduce( (prev, current) => current + prev);

        // Transform the string into a number
        numberReversed = reversed * 1;
    } else {
        // convert the number to a string and make it positive
        numberToString = `${-n}`;

        //Reverse the string
        reversed = numberToString.split('').reduce( (prev, current) => current + prev);

        // Transform the stirng into a negative number
        numberReversed = reversed * (-1);
    }

    return numberReversed;
}

/* Solution 1 */
function reverseInt1(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('')
    ;

    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt1;
