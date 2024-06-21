let randno = Math.round(Math.random()*100 + 1);


const sub = document.querySelector("#subt");
const input = document.querySelector(".guessField");
const remainNo = document.querySelector(".lastResult");
const guessSlot  = document.querySelector(".guesses");
const guessOutput = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let GuessList = [];
let numGuess = 0;

let playGame = true;

if(playGame === true){
    sub.addEventListener("click",function(eve){
        eve.preventDefault();
        console.log(input);
        const guessNo = parseInt(input.value);
        console.log(guessNo);   
        validateGuess(guessNo);

    })
};


function validateGuess(guessNo){
    if(isNaN(guessNo) || guessNo <1 || guessNo > 100){
        displayMessage(`Please enter the valid Number`);
    }else{
        if(numGuess == 10){
            displayMessage(`Game Over! Please Start Game Again`);
            clearMessage(guessNo);
            endGame();

        }else{
           clearMessage(guessNo);
           checkGuess(guessNo);

        }
    }
}


function displayMessage(message){
    guessOutput.innerHTML = `<h2>${message}</h2>`;
}

function checkGuess(number){
    if(randno === number){
        displayMessage(`Congratulations ,You guess it right`);
    }
    else if(randno > number){
        displayMessage(`Number is too low`);
    }
    else{
        displayMessage(`Number is too high`);
    }
};


function clearMessage(number){
    input.value = '';
    guessSlot.innerHTML += `${number} `
    numGuess++;
    GuessList.push(number);
    remainNo.innerHTML = 10-numGuess;

}

function endGame(){
    input.value = '';
    input.setAttribute('disabled','');
    p.classList.add("button");
    p.innerHTML = `<h2 id =newGame > Start Game </h2>`;
    startOver.appendChild(p);
    playGame =false;
    newGame();
}

function newGame(){
    const buttonClick = document.querySelector('#newGame');
    buttonClick.addEventListener('click',function(eve){
        eve.preventDefault();
        randno = Math.round(Math.random()*100 + 1);
        playGame = true;
        numGuess =0;
        remainNo.innerHTML = 10-numGuess;
        guessSlot.innerHTML = " ";
        input.removeAttribute('disabled');
        startOver.removeChild(p);
        GuessList = [];

    });

}
