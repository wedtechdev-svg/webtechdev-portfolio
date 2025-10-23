//  const targetNumber = Math.floor(Math.random() * 10) + 1;

//     function checkGuess() {
//       const guess = parseInt(document.getElementById("userGuess").value);
//       const feedback = document.getElementById("feedback");

//       if (isNaN(guess) || guess < 1 || guess > 10) {
//         feedback.textContent = "Please enter a valid number between 1 and 10.";
//         return;
//       }
//        if (guess < targetNumber) {
//         feedback.textContent = "Too low!";
//       } else if (guess > targetNumber) {
//         feedback.textContent = "Too high!";
//       } else {
//         feedback.textContent = `Correct! The number was ${targetNumber}.`;
//       }
//     }
 let targetNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;
    const maxAttempts = 5;

    function checkGuess() {
      const guess = parseInt(document.getElementById("userGuess").value);
      const feedback = document.getElementById("feedback");
      const attemptsLeft = document.getElementById("attemptsLeft");

      if (isNaN(guess) || guess < 1 || guess > 10) {
        feedback.textContent = "Please enter a valid number between 1 and 10.";
        return;
      }

      attempts++;

      if (guess < targetNumber) {
        feedback.textContent = "Too low!";
      } else if (guess > targetNumber) {
        feedback.textContent = "Too high!";
      } else {
        feedback.textContent = `Correct! The number was ${targetNumber}.`;
        endGame();
        return;
      }

      if (attempts >= maxAttempts) {
        feedback.textContent += ` Game over! The number was ${targetNumber}.`;
        endGame();
      } else {
        attemptsLeft.textContent = `Attempts left: ${maxAttempts - attempts}`;
      }
    }

    function endGame() {
      document.getElementById("submitBtn").disabled = true;
      document.getElementById("userGuess").disabled = true;
      document.getElementById("resetBtn").style.display = "inline";
    }

    function resetGame() {
      targetNumber = Math.floor(Math.random() * 10) + 1;
      attempts = 0;
      document.getElementById("userGuess").value = "";
      document.getElementById("feedback").textContent = "";
      document.getElementById("attemptsLeft").textContent = "";
      document.getElementById("submitBtn").disabled = false;
      document.getElementById("userGuess").disabled = false;
      document.getElementById("resetBtn").style.display = "none";
    }
  


