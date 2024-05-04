const questions = [
  {
    question: "Apa yang menjadi alat transportasi utama di kota Venice, Italia?",
    answer: [
      { text: "Kereta api", correct: false },
      { text: "Mobil", correct: false },
      { text: "Perahu", correct: true },
      { text: " Sepeda", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi hasil akhir dari fotosintesis pada tumbuhan?",
    answer: [
      { text: "Air", correct: false },
      { text: "Glukosa", correct: true },
      { text: "Karbon dioksida", correct: false },
      { text: "Protein", correct: false },
    ],
  },
  {
    question: "Apa yang menjadi bahan utama dalam pembuatan kue brownies?",
    answer: [
      { text: "Tepung beras", correct: false },
      { text: "Tepung terigu", correct: true },
      { text: "Tepung jagung", correct: false },
      { text: "Tepung tapioka", correct: false },
    ],
  },
  {
    question: "Siapakah penemu teori relativitas umum?",
    answer: [
      { text: "Isaac Newton", correct: false },
      { text: "Albert Einstein", correct: true },
      { text: "Galileo Galilei", correct: false },
      { text: "Stephen Hawking", correct: false },
    ],
  },
  {
    question: "Apakah nama planet terbesar di tata surya kita?",
    answer: [
      { text: "Bumi", correct: false },
      { text: "Mars", correct: false },
      { text: "Jupiter", correct: true },
      { text: "Venus", correct: false },
    ],
  },
  {
    question: "Berapa jumlah provinsi di Indonesia saat ini?",
    answer: [
      { text: "30", correct: false },
      { text: "32", correct: false },
      { text: "34", correct: true },
      { text: "36", correct: false },
    ],
  },
  {
    question: "Siapakah pelukis terkenal yang menciptakan lukisan Mona Lisa?",
    answer: [
      { text: "Pablo Picasso", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Vincent van Gogh", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    question: "Apa ibukota dari negara Jepang?",
    answer: [
      { text: "Tokyo", correct: true },
      { text: "Osaka", correct: false },
      { text: "Kyoto", correct: false },
      { text: "Seoul", correct: false },
    ],
  },
  {
    question: "Siapakah penulis dari novel 'Harry Potter'?",
    answer: [
      { text: "J.R.R. Tolkien", correct: false },
      { text: "J.K. Rowling", correct: true },
      { text: "George R.R. Martin", correct: false },
      { text: "Stephen King", correct: false },
    ],
  },
  {
    question: "Apakah benua terbesar di dunia menurut luas wilayah?",
    answer: [
      { text: "Benua Amerika", correct: false },
      { text: "Benua Afrika", correct: false },
      { text: "Benua Asia", correct: true },
      { text: "Benua Australia", correct: false },
    ],
  },
];

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let questionIndex = 0;
let score = 0;

function startQuiz() {
  questionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[questionIndex];
  let questionNo = questionIndex + 1;
  questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectButton = e.target;
  const isCorrect = selectButton.dataset.correct === "true";
  if (isCorrect) {
    selectButton.classList.add("correct");
    score++;
  } else {
    selectButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionEl.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  questionIndex++;
  if (questionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (questionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
