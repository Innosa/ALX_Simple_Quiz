function checkAnswer(correctAnswer) {
  const correctAnswer = document.querySelector('input[name="quiz"]:checked');
  if (correctAnswer) {
    const userAnswer = correctAnswer.value;
    if (userAnswer === correctAnswer) {
      console.log(`Correct! Well done.: ${userAnswer}`);
    } else {
      console.log("That's incorrect. Try again!");
    }
  }

  document
    .getElementById("submit-answer")
    .addEventListener("click", function () {
      checkAnswer("4");
    });
}
