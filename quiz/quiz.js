let questions = [
  { question: "The sky is blue", correctAnswer: true },
  { question: "Dogs can fly", correctAnswer: false },
  { question: "There are seven days in a week", correctAnswer: true },
  { question: "A year has 365 days", correctAnswer: true },
  { question: "Humans have three legs", correctAnswer: false }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
  if (currentQuestionIndex < questions.length) {
    document.getElementById('quiz-question').innerText = questions[currentQuestionIndex].question;
  } else {
    document.getElementById('quiz-question').innerText = "Quiz Completed!";
    document.getElementById('score').innerText = `Final Score: ${score}`;
  }
}

function checkAnswer(answer) {
  if (currentQuestionIndex < questions.length) {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      score += 1;
    }
    document.getElementById('score').innerText = `Score: ${score}`;
    currentQuestionIndex += 1;
    displayQuestion();
  }
}

window.onload = displayQuestion;
