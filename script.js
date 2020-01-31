
//DOM elements
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const leaderboardContainer = document.getElementById("leaderboard");


//Core functions
function buildQuiz() {
  const output = [];
  myQuestions.forEach(function(currentQuestion, questionAnswer) {
    const answers = [];
    for(letter in currentQuestion.answers) {

    }
  })
};

function showResults(){

};


//Initialize the quiz

buildQuiz();

//Show results upon submitting

submitButton.addEventListener("click", showResults);

//Questions

const myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];

