// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative solution
function fib(n) {
    if( n === 0 ) {
        return 0;
    }
    
    if ( n === 1 ) {
        return 1;
    }
    
    const series = [0, 1];

    for (let i = 2; i <= n; i++) {
        series.push( series[i-2] + series[i-1] );
    }

    return series[n];
}

//Recursive solution

function fibRecursive(n) {
    // Base case
    if (n === 0) return 0;
    if ( n === 1 ) return 1;

    return fib(n-2) + fib(n-1);
}

module.exports = fibRecursive;
