let randomnum = Math.floor(Math.random() * 100) +1 ;
console.log(randomnum);

function GuessNumber(){

    let GuessNum = parseInt(document.getElementById("Userguess").value);
    let message = document.getElementById("message");

    if(isNaN(GuessNum) || GuessNum < 1 || GuessNum <100)
    {
        message.textContent = "please Enter number between 1 to hundred.";
        message.style.color = "red";
    }
    else if(GuessNum > randomnum)
    {
        message.textContent = "Too High";
        message.style.color = "Green";
    }
    else if(GuessNum < randomnum)
    {
        message.textContent = "Too Low";
        message.style.color = "Green";
    }
    else{
        message.textContent = "Congratulation ";
        document.getElementById("Userguess").disable=true;

        document.getElementById("Userguess").value ="";
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
}


