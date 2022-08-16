const choice = ['ROCK', 'SCISSOR', 'PAPER']

function randomComputerPick() {         //we will use this to generate a number we can use to pick an item from choice by index
    rnd = Math.random();                //generate random number between 0 and 1
    rnd *= choice.length                //account for range of array
    rnd = Math.floor(rnd)               //floor this cause arrays start at 0 and we need integers
    return rnd;
}

function getComputerPick() {
    pick = randomComputerPick();        //assign the return value of randomComputerPick to pick variable             
    return choice[pick];                //return the actual pick value
}

let playerpick = '';
let computerpick = '';


function getPlayerChoice() {
    let cPC = false;
    while (cPC === false) {
        // allow user to make his choice and capitalize his choice
        playerpick = prompt("Please provide your choice (ROCK, SCISSOR or PAPER): ").toUpperCase(); 
        // check if the input corrosponds with the available choices
        cPC = choice.includes(playerpick);
        console.log(playerpick, cPC)
        if (cPC) {
            console.log("Thank you for providing an input");
            return playerpick;
        } else {
            console.log("You provided a wrong inputvalue. Please try again");
        }
    }
}

//rock beats scissors
//paper beats rock
//scissors beats paper

let playerscore = 0;
let computerscore = 0;


function playRound(computerselection, playerselection) {
    if (computerselection === "ROCK") {
        if (playerselection === "ROCK") {
            playerscore = 0;
            computerscore = 0;
        } else if (playerselection === "PAPER") {
            playerscore += 1;
        } else {
            computerscore += 1;
        }
    } else if (computerselection === "PAPER") {
        if (playerselection === "PAPER") {
            playerscore = 0;
            computerscore = 0;
        } else if (playerselection === "SCISSOR") {
            playerscore += 1;
        } else {
            computerscore += 1;
        }
    } else if (computerselection === "SCISSOR") {
        if (playerselection === "SCISSOR") {
            playerscore = 0;
            computerscore = 0;
        } else if (playerselection === "ROCK") {
            playerscore += 1;
        } else {
            computerscore += 1;
        }
    }
    console.log(computerselection, playerselection);
    console.log(computerscore, playerscore);
    if (playerscore > computerscore) {
        return "Player won"
    } else if (playerscore < computerscore) {
        return "Computer won"
    } else {
        return "Tie"
    }
}



function play() {
    for (let i = 0; i < 5; i++) {
        let computerselection = getComputerPick();
        let playerselection = getPlayerChoice();
        playRound(computerselection, playerselection);
        console.log(playRound(),i)
    }
}

