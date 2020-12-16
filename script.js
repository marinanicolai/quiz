const quizData = [
    {
        question:"How old is Elvina?"
        a:"3",
        b:"4",
        c:"5",
        correct:"b"
    },
    {
        question:"What is the most used progrmming language?"
        a:"Java",
        b:"C",
        c:"Phython",
        correct:"a"
    },
    {
        question:"who is thePresident of US?"
        a:"Marina Nicolai",
        b:"Biondina Nicolai",
        c:"Donald Trump",
        correct:"c"
    }
]

const a_text = document.getElementById("a_text");

let currentQuestion = 0;

loadQuiz();

function loadQuiz(){
    currentQuestion ++;
}

