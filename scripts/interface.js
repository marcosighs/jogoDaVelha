let squares = document.querySelectorAll('.square');

document.addEventListener('DOMContentLoaded', () => {

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    });

})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    if (handleMove(position)){

        setTimeout( () => {
            let isWinner = (playerTime == 0)? players[0] : players[1];
            alert("The winner is " + isWinner);
        }, 10);

    }

    updateSquares();
}

function updateSquares(){

    squares.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (symbol != ""){
            square.innerHTML = `<div class="${symbol}"></div>`;
        }
    })
}