const tempresult = document.querySelectorAll('.tempresult>span');

const computer_plays = document.querySelectorAll('.game>.computer>.plays>span');
const player_plays = document.querySelectorAll('.game>.player>.plays>span');
const computer_stars = document.querySelectorAll('.game>.computer>.stars>span');
const player_stars = document.querySelectorAll('.game>.player>.stars>span');

const choice = document.querySelectorAll('.choice>span');
const paper = document.querySelector('.choice>.paper');
const rock = document.querySelector('.choice>.rock');
const scissor = document.querySelector('.choice>.scissor');

// get computer pick
function getRndComputerPick() {   
    let computerchoice = []; 
    rnd = Math.random()*choice.length;    
    rnd = Math.floor(rnd);
    let pick = choice[rnd].classList[1];
    let text = choice[rnd].textContent;
    computerchoice = [pick, text];
    return computerchoice;
}

choice.forEach((choice) => {
    choice.addEventListener('click', () => {
        let playerchoice = [];
        let pick = choice.classList[1];
        let text = choice.textContent;
        playerchoice.push(pick, text);
        computerchoice = getRndComputerPick();
        eraseCurrentPlay();
        playRound(computerchoice, playerchoice);
        console.log(checkGameOver(score));
    });
});

let score = [];
let playerscore = 5;
let computerscore = 5;
let all_plays_player = [];
let winner = '';

function playRound(computerchoice, playerchoice) {

    let computerchoice_name = computerchoice[0];
    let computerchoice_icon_name = computerchoice[1];
    let playerchoice_name = playerchoice[0];
    let playerchoice_icon_name = playerchoice[1];

    //check who won
    winner = whoWins(computerchoice_name, playerchoice_name);
    console.log(winner);

    if (winner !== 'none') {
        //display current play and store play values
        createResultSpans(  computerchoice_name, computerchoice_icon_name, 
                            playerchoice_name, playerchoice_icon_name);
        //adjust score
        adJustScore(winner);
    }    
};

function adJustScore(winner){
    if (winner === 'computer') {
        playerscore -=1;
    } else if (winner === 'player') {
        computerscore -=1;
    }
    if (playerscore < 5) {
        player_stars[playerscore].style.opacity = 0.25;
    }
    if (computerscore <5) {
        computer_stars[computerscore].style.opacity = 0.25;
    }
    score = [computerscore, playerscore]
    return score;
};

function whoWins(computerchoice_name, playerchoice_name){
    if (computerchoice_name === playerchoice_name){
        return 'none';
    } else if ( computerchoice_name === 'rock'   &&  playerchoice_name === 'scissor'  ||
                computerchoice_name === 'paper'  &&  playerchoice_name === 'rock'     ||
                computerchoice_name === 'scissor'&&  playerchoice_name === 'paper') {
                return 'computer';
    } else {
        return 'player';
    }
};

function createResultSpans( computerchoice_name, computerchoice_icon_name, 
                            playerchoice_name, playerchoice_icon_name) {

    tempresult[0].classList.add("material-symbols-outlined");
    tempresult[0].classList.add(computerchoice_name);
    tempresult[0].textContent = computerchoice_icon_name;

    tempresult[1].classList.add("material-symbols-outlined");
    tempresult[1].classList.add(playerchoice_name);
    tempresult[1].textContent = playerchoice_icon_name;


    for (let i =0; i<= computer_plays.length-1;i++) {
        if (computer_plays.item(i).textContent === '') {
            computer_plays.item(i).textContent = computerchoice_icon_name;
            computer_plays.item(i).classList.add(computerchoice_name);
            break;
        }
    };
    for (let i =0; i<= player_plays.length-1;i++) {
        if (player_plays.item(i).textContent === '') {
            player_plays.item(i).textContent = playerchoice_icon_name;
            player_plays.item(i).classList.add(playerchoice_name);
            break;
        }
    };
                                
};

function eraseCurrentPlay() {
    tempresult[0].classList = '';
    tempresult[0].textContent = '';
    tempresult[1].textContent = '';
    tempresult[1].textContent = '';
};

function checkGameOver() {
    if (playerscore === 0) {
        return 'GameOver, Computer won.'
    } else if (computerscore === 0) {
        return 'GameOver, Player won'
    };
}