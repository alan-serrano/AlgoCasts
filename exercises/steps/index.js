// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

    for (let i = 1; i <= n; i++) {
        const arrHelper = new Array(n);

        for (let j = 0; j < n; j++) {
            if( j < i ) {
                arrHelper[j] = '#';

            } else {
                arrHelper[j] = ' ';
            }
        }

        console.log(arrHelper.join(''));
    }
}


/* Solution 1 of the video */
function steps1(n) {
    for( let row = 0; row < n; row++ ) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if( column <= row ) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
}

/* Solution 2 with recursion */

function steps2(n, row = 0, stair = '') {
    if( n === row ) {
        return;
    }

    if(n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    if(stair.length <= row ) {
        stair += '#';
    } else {
        stair += ' ';
    }

    steps(n, row, stair);
}

module.exports = steps2;
