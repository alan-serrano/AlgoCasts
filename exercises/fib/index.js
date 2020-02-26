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

/* Solution 1 of the video */
function fib1(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }

    return result[n];
}

/* Solution 2 recursively of the video */
function memoize(fn) {
    const cache = {};

    return function (...args) {
        if( cache[args] ) {
            return cache[args];
        }

        const result = fn.apply(null, args);
        cache[args] = result;

        return result;
    }
}

function fib2(n) {
    if( n < 2 ) return n;

    return fib2( n - 2 ) + fib2( n - 1 );
}

fib2 = memoize(fib2);

module.exports = fib2;
