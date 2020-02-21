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

module.exports = steps;
