function win(psARG, csARG) {
    let result;
    
    if ((psARG === 'Rock' && csARG === 'Scissors') ||
        (psARG === 'Paper' && csARG === 'Rock') ||
        (psARG === 'Scissors' && csARG === 'Paper')) {
        result = 'You win!';
    } else if (psARG === csARG) {
        result = "It's a tie!";
    } else {
        result = 'Computer wins!';
    }

    document.querySelector('.player-win').innerText = `RESULT : ${result}`;
}

function computerGenerator(playerSelection) {
    let randomGenerator = Math.floor(Math.random() * 3) + 1;
    let computerSelection;
    
    if (randomGenerator === 1) {
        computerSelection = 'Rock';
    } else if (randomGenerator === 2) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    document.querySelector('.players-info').innerText = `USER selected : ${playerSelection} \nCOMPUTER selected  : ${computerSelection}`;
    win(playerSelection, computerSelection);
}
