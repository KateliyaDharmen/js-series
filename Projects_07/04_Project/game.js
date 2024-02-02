let randomNum = parseInt(Math.random()*100 + 1);
console.log(randomNum);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guessfield");
const guessSlot = document.querySelector(".prevGuess");
const remainVal = document.querySelector(".remainValue");
const diplayResult = document.querySelector(".resultDisplay");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // console.log(guess);
        validateInput(guess);
    });
}

function validateInput (guess) {
    //check the guess number , if it valid or not
    if(isNaN(guess)){
        alert(`Please enter a valid number`);
    }else if(guess < 1){
        alert(`Please enter a number more than 1`);
    }else if(guess > 100){
        alert(`Please enter a number less than 100`)
    }else{
        if(numGuess === 11){
            // updateGuess(guess);
            displayMsg(`Game Over. Random Number was ${randomNum}`);
            endGame();
        }else{
            updateGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //check the guess number with the random number
    if(guess === randomNum){
        displayMsg(`You Guessed it Right. You win :)`);
        endGame();
    }else if(guess < randomNum){
        displayMsg(`The Number Is Tooo Low`);
    }else if(guess > randomNum){
        displayMsg(`The Number Is Tooo High`);
    }
}

function updateGuess(guess){
    //after checking the number it upadates the other value like previous guess(guessSlot) and ramaining value(reaminVal)
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remainVal.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message){
    //display the result or message basis on other function
    diplayResult.innerHTML = `${message}`;
}

function endGame(){
    //Ending the game and start the new game
    userInput.value = "";
    userInput.setAttribute('disabled', "");
    p.classList.add('button');
    p.innerHTML = `<h3 id="button">New Game</h3>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    //start the new game
    const button = document.querySelector("#button");
    button.addEventListener('click', () => {
        randomNum = parseInt(Math.random()*100 + 1);
        numGuess = 1;
        guessSlot.innerHTML = '';
        remainVal.innerHTML = `${11 - numGuess}`;
        diplayResult.innerHTML = '';
        userInput.removeAttribute("disabled");
        startOver.removeChild(p);
        playGame = true;
    });
}