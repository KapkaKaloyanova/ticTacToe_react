export default function calculateWinner(squares) {
    // these are the winning combinations by lines
    const lines = [
        [0,1,2], // horizontal
        [3,4,5],
        [6,7,8],
        [0,3,6], // vertical
        [1,4,7],
        [2,5,8],
        [0,4,8], // diagonal
        [2,4,6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a,b,c] = lines[i];
        // if square a has a state and is equal to b and is equal to c simultaneous - we have a winner
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    // else there is no winner return nothing
    return null;
};