const choice = ['ROCK', 'SCISSOR', 'PAPER']

function randomComputerPick() {         //we will use this to generate a number we can use to pick an item from choice by index
    rnd = Math.random();                //generate random number between 0 and 1
    rnd *= choice.length                //account for range of array
    rnd = Math.floor(rnd)               //floor this cause arrays start at 0 and we need integers
    console.log(rnd);
    return rnd;
}

function getComputerPick() {
    pick = randomComputerPick();        //assign the return value of randomComputerPick to pick variable
    console.log(pick);               
    return choice[pick];                //return the actual pick value
}

let playerpick = '';

function getPlayerChoice() {
    cPC = checkPlayerChoice();
    while (cPC === false) {
        // allow user to make his choice and capitalize his choice
        playerpick = prompt("Please provide your choice (ROCK, SCISSOR or PAPER): ").toUpperCase(); 
        // check if the input corrosponds with the available choices
        if (checkPlayerChoice()) {
            console.log("Thank you for providing an input");
            return playerpick;
        } else {
            console.log("You provided a wrong inputvalue. Please try again");
        }
    } 
}

function checkPlayerChoice() {
    return choice.includes(playerpick);
}