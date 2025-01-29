document.getElementById("EnterGuess").addEventListener("click", EnterGuess);

function EnterGuess() {
  var correctGuess = Math.floor(Math.random()*10);
  let answer = prompt("Guess a Number between 0 - 20:");

  if (answer === null) {
    return;
  }
  var guess = parseInt(answer);

  if (isNaN(guess)) {
    document.getElementById("message").innerHTML =
      "⁉️Invalid input. Please enter a number.";
    return;
  }

  if (guess === correctGuess) {
    document.getElementById("message").innerHTML = "✅Correct guess!";
  } else {
    document.getElementById("message").innerHTML = "🚨Sorry, try again🚨.";

    var difference = Math.floor(guess - correctGuess);
    if (difference <= 3) {
      document.getElementById("message").innerHTML += "<br>🥵 You were Hot!!";
    } else {
      document.getElementById("message").innerHTML += "<br>🥶You were Cold!!";
    }
  }

  
}
