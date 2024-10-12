function checkAnswer() {
  let answer = 4;
  let correctAnswer = document.querySelector('input[name="quiz"]:checked');
  if (correctAnswer) {
    let userAnswer = parseInt(correctAnswer.value);
    if (userAnswer === answer) {
      console.log(`Correct! Well done. ${userAnswer}`);
    } else {
      console.log("That's incorrect. Try again!");
    }
  }
}

const button = document.getElementById("submit-answer");
button.addEventListener("click", checkAnswer);
