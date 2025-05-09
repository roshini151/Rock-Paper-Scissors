// Initializing scores
let userScore = 0;
let compScore = 0;

// Selecting the elements from the DOM
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const resetButton = document.querySelector("#reset-btn");

// Function to generate computer's choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

// Function for handling draw game
const drawGame = () =>{
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

// Function for showing winner and updating scores
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// Function to play the game
const playGame = (userChoice) => {
    
    //Generate computer choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){

        // If both choices are the same, it's a draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

// Adding event listener to each choice for user interaction
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


// Function to reset the game
const resetGame = () =>{
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31"; // Reset to default color
};

// Adding event listener to the reset button
resetButton.addEventListener("click", resetGame);