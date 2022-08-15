const choice = ['Rock', 'Scissor', 'Paper']

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