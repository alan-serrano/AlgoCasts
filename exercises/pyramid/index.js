// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    var spaces = 2*n - 1;
    var middle = Math.floor( spaces/2 );
    for( let row = 0; row < n; row++) {
        let stair = '';
        let start = middle - row;
        let end = middle + row;

        for( let column = 0; column < spaces; column++ ) {
            debugger;
            if(column >= start && column <= end) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
}

function pyramidRecursively(n, row = 0, stair = '') {
    let spaces = 2*n - 1;
    let middle = Math.floor( spaces/2 );
    let start = middle - row;
    let end = middle + row;
    
    if(n === row) return;

    if(stair.length === spaces) {
        console.log(stair);
        pyramidRecursively(n, row + 1);
        return;
    }

    if( stair.length >= start && stair.length <= end ) {
        stair += '#';
    } else {
        stair += ' ';
    }

    pyramidRecursively(n, row, stair);
}

/* Solution 1 of the video */
function pyramid1(n) {
    const midpoint = Math.floor((2*n - 1) / 2);

    for(let row = 0; row < n; row++) {
        let level = '';

        for(let column = 0; column < 2*n - 1; column++) {
            if(midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }

        console.log(level);
    }
}

/* Solution 2 of the video */
function pyramid1Recursively(n, row = 0, level = '') {
    if( row === n ) {
        return;
    }

    if( level.length === 2*n -1 ) {
        console.log(level);
        return pyramid1Recursively(n, row + 1);
    }

    const midpoint = Math.floor( (2*n - 1) / 2 );

    let add;

    if(midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid1Recursively(n, row, level + add);
}

module.exports = pyramid1Recursively;
