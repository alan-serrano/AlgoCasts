// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    var tmp = []; // Array Helper
    var counter = 0; // Pointer of subArrays

    // Initialize all the subarrays
    for(let i = 1; i <= Math.ceil(array.length / size); i++) {
        tmp.push([]);
    }

    // Each multiple of size, mean another subArray
    array.forEach((el, i) => {
        if(i % size === 0 && i !== 0) {
            counter++;
        }

        tmp[counter].push(el);
    });

    return tmp;
}

module.exports = chunk;
