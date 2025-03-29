let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let userGuess = parseInt(document.getElementById("guessInput").value);
  let message = document.getElementById("message");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      message.textContent = "❌ Please enter a number between 1 and 100.";
      message.style.color = "red";
  } else if (userGuess < randomNumber) {
      message.textContent = "⬇ Too low! Try again.";
      message.style.color = "yellow";
  } else if (userGuess > randomNumber) {
      message.textContent = "⬆ Too high! Try again.";
      message.style.color = "yellow";
  } else {
      message.textContent = `🎉 Correct! You guessed it!`;
      message.style.color = "lightgreen";
      document.getElementById("guessInput").disabled = true;
  }

  // Clear the input field
  document.getElementById("guessInput").value = "";
}


function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
}

function handleEnter(event) {
  if (event.key === "Enter") {
      checkGuess();
  }
}
