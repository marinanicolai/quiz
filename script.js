const quizData = [
  {
    question: "How old is Elvina?",
    a: "3",
    b: "4",
    c: "5",
    d: "4",
    correct: "b",
  },
  {
    question: "What is the most used progrmming language?",
    a: "Java",
    b: "C",
    c: "Phython",
    d: "C++",
    correct: "a",
  },
  {
    question: "who is thePresident of US?",
    a: "Marina Nicolai",
    b: "Biondina Nicolai",
    c: "Donald Trump",
    d: "Elvina",
    correct: "c",
  },
];

const questionEl = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  currentQuiz++;
}

submitBtn.addEventListener("click", () => {
  currentQuiz++;

  loadQuiz();
});
