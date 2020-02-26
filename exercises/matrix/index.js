// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let elements = n*n;
    let actionIndex = 0;

    // Creating the matrix
    const m = Array(n).fill().map( () => new Array(n) );

    // Creating an object of counters
    const direction = {
        row: 0,
        column: 0,
    }

    // Creating an array of actions
    const actions = [
        {counter: 'column', action: 'increment', stopOn: n - 1},
        {counter: 'row',    action: 'increment', stopOn: n - 1},
        {counter: 'column', action: 'decrement', stopOn: 0},
        {counter: 'row',    action: 'decrement', stopOn: 0}
    ];

    for (let i = 1; i <= elements; i++) {
        let action = actions[actionIndex];

        if( direction[action.counter] === action.stopOn ) {
            m[direction.row][direction.column] = i;
            changeDirection();

            // Next direction
            direction.row = nextDirection().row;
            direction.column = nextDirection().column;
            
        } else{

            // If the next value on the same direction is full, then change direction
            if( m[nextDirection().row][nextDirection().column]  ) {
                changeDirection();
            }
            
            m[direction.row][direction.column] = i;
            
            // Next direction
            console.log(nextDirection());
            direction.row = nextDirection().row;
            direction.column = nextDirection().column;
        }
    }
    
    
    return m;
    
    // Helpers function
    function changeDirection() {
        actionIndex++;

        if( actionIndex === actions.length ) {
            actionIndex = 0;
        }
    }

    function nextDirection() {
        let action = actions[actionIndex];
        let counter = action.counter;
        let row;
        let column;

        if( action.action === 'increment' ) {
            if(counter === 'column') {
                column = direction[counter] + 1;
                row = direction['row'];
            } else {
                column = direction['column'];
                row = direction[counter] + 1;
            }

        } else if( action.action === 'decrement' ) {
            if(counter === 'column') {
                column = direction[counter] - 1;
                row = direction['row'];
            } else {
                column = direction['column'];
                row = direction[counter] - 1;
            }
        }
        
        else console.log('Action not permmitted');

        return {
            row: row,
            column: column
        }
    }
}

function matrix1(n) {
    const results = [];

    for (let i = 0; i < n; i++) {
        results.push([])
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while( startColumn <= endColumn && startRow <= endRow ){
        // Top Row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }

        startRow++;

        // Right column

        for( let i = startRow; i <= endRow; i++ ) {
            results[i][endColumn] = counter;
            counter++;
        }

        endColumn--;

        // Bottom row
        for( let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }

        endRow--;

        // Left column

        for( let i = endRow; i >= startRow; i-- ) {
            results[i][startColumn] = counter;
            counter++;
        }

        startColumn++;
    }

    return results;
}

module.exports = matrix1;
