// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    // Maintain just the alphanumeric characters
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    // If the sizes of both strings are different return false
    if(stringA.length !== stringB.length) return false;
    
    // Creating an object for each string
    var mapA = {};
    var sizeA = 0;
    var mapB = {};
    var sizeB = 0;

    // Mapping the elements of string A
    for (const ch of stringA) {
        if(mapA.hasOwnProperty(ch)) {
            mapA[ch]++;
        } else {
            sizeA++;
            mapA[ch] = 0;
        }
    }

    // Mapping the elements of string B
    for (const ch of stringB) {
        if(mapB.hasOwnProperty(ch)) {
            mapB[ch]++;
        } else {
            sizeB++;
            mapB[ch] = 0;
        }
    }

    // If the sizes of the keys of the object are different
    if(sizeA !== sizeB) return false;

    // Comparing the values an Quantities
    for (const key in mapA) {
        if( mapA[key] !== mapB[key] ) return false;
    }

    return true;

}

module.exports = anagrams;
