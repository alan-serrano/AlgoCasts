// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalizeA1(str) {
    const arr = new Array(str.length);
    let counter = 1;

    for (let i = 0; i < str.length; i++) {
        if(str[i] === " ") {
            //Reset counter
            counter = 0;
        }

        if(counter === 1) {
            arr[i] = str[i].toUpperCase();
        } else {
            arr[i] = str[i];
        }

        counter++;
    }

    return arr.join('');
}

function capitalizeA2(str) {
    const words = str.split(' ').map( (word) => {
        return word[0].toUpperCase() + word.slice(1);
    })

    return words.join(' ');
}

/* Solution 1 of the video */

function capitalize1(str) {
    const words = [];

    for ( const word of str.split(' ') ) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

/* Solution 2 of the video */

function capitalize2(str) {
    let result = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++) {
        if( str[ i - 1 ] === ' ' ) {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
}

module.exports = capitalize2;
