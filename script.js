let record = {
    user : 0,
    computer : 0,
    draw : 0
}

function win(psARG, csARG) {
    let result;
    
    if ((psARG === 'Rock' && csARG === 'Scissors') ||
        (psARG === 'Paper' && csARG === 'Rock') ||
        (psARG === 'Scissors' && csARG === 'Paper')) {
        result = 'You win!';
        record.user++;
    } else if (psARG === csARG) {
        result = "It's a tie!";
        record.draw++;
    } else {
        result = 'Computer wins!';
        record.computer++;
    }

    // document.querySelector('.player-win').innerText = `RESULT : ${result}`;
    document.querySelector('.player-win').innerText = `RESULT : ${result} \nPLAYER : ${record.user} | COMPUTER : ${record.computer} | DRAW : ${record.draw}`;
    console.log(record)
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
