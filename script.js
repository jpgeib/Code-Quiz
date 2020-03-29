const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: ["Douglas Crockford", "Sheryl Sandberg", "Brendan Eich"],
    correctAnswer: "Brendan Eich"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: ["Node.js", "TypeScript", "npm"],
    correctAnswer: "npm"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: ["Angular", "jQuery", "RequireJS", "ESLint"],
    correctAnswer: "ESLint"
  },
  {
    question: "If we were to write: let someNumber = 5, and someNumber = 7, what would the console log?",
    answers: ["5", "7", "undefined", "42"],
    correctAnswer: "7"
  },
  {
    question: "Which function takes a string and converts it to an array?",
    answers: [".split()", ".join()", ".reverse()", ".push()"],
    correctAnswer: ".split()"
  }
];

//Quiz elements
var currentQuestionIndex = 0;


//DOM elements
const quizContainer = document.getElementById("quiz-container");
const questionsEl = document.getElementById("questions");
const choicesEl = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const startButton = document.getElementById("start");
const initialsEl = document.getElementById("initials");
const resultsEl = document.getElementById("results");
const timer = document.getElementById("time");
var secondsLeft = 101;


//Building the quiz
function buildQuiz() {
  const startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  questionsEl.removeAttribute("class");

  //Timer functions

  function timeLimit() {
    const timeInterval = setInterval(function () {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds remaining...";

      if (secondsLeft === 0) {
        clearInterval(timeInterval);
        endQuiz();
      } else if(currentQuestionIndex === myQuestions.length) {
        timer.setAttribute("class", "hide");
      }
    }, 1000);
  };

  timeLimit();

  getQuestion();
};



function getQuestion() {
  const currentQuestion = myQuestions[currentQuestionIndex];

  const titleEl = document.getElementById("question");
  titleEl.textContent = currentQuestion.title;

  choicesEl.innerHTML = "";

  currentQuestion.answers.forEach(function(choice, i) {
    const option = document.createElement("button");
    option.setAttribute("class", "choice");
    option.setAttribute("value", choice);

    option.textContent = i + 1 + ". " + choice;

    option.onclick = questionClick;

    choicesEl.appendChild(option);
  });
};

function questionClick() {
  if(this.value !== myQuestions[currentQuestionIndex].correctAnswer) {
    secondsLeft -= 15;

    if(secondsLeft < 0) {
      secondsLeft = 0;
    };

    timer.textContent = secondsLeft;

    resultsEl.textContent = "Wrong!";
  } else {
    resultsEl.textContent = "Correct!";
  }

  resultsEl.setAttribute("class", "results");
  setTimeout(function() {
    resultsEl.setAttribute("class", "results hide");
  }, 1000);

  currentQuestionIndex++;

  if(currentQuestionIndex === myQuestions.length) {
    endQuiz()
  } else {
    getQuestion();
  };
};

function endQuiz() {

  const endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  const total = document.getElementById("total")
  total.textContent = secondsLeft;

  questionsEl.setAttribute("class", "hide");
};

function saveScore() {
  const user = initialsEl.value.trim();

  if(user !== "") {
    const leaderboard = JSON.parse(window.localStorage.getItem("score-table")) || [];

    const newScore = {
      score: secondsLeft,
      user: user
    };

    leaderboard.push(newScore);
    window.localStorage.setItem("score-table", JSON.stringify(leaderboard));
    window.location.href = "leaderboard.html"
  }
}

function enterClick(event) {
  if(event.key === "Enter") {
    saveScore();
  }
};

//Event listeners

submitButton.addEventListener("click", saveScore);
startButton.addEventListener("click", buildQuiz);
initialsEl.onkeyup = enterClick;









//Scraps from previous attempt

// //Page functions

// function showSlide(n) {
//   slides[currentSlide].classList.remove('active-slide');
//   slides[n].classList.add('active-slide');
//   currentSlide = n;

//   if (currentSlide === 0) {
//     previousButton.style.display = 'none';
//   } else {
//     previousButton.style.display = 'inline-block';
//   };

//   if (currentSlide === slides.length - 1) {
//     nextButton.style.display = 'none';
//     submitButton.style.display = 'inline-block';
//   } else {
//     nextButton.style.display = 'inline-block';
//     submitButton.style.display = 'none';
//   };
// };

// function showNextSlide() {
//   showSlide(currentSlide + 1);
// };

// function showPreviousSlide() {
//   showSlide(currentSlide - 1);
// };








//Initialize the quiz
// buildQuiz();


//Pagination
// const previousButton = document.getElementById("previous");
// const nextButton = document.getElementById("next");
// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;

//Show the first slide

// showSlide(currentSlide);



// previousButton.addEventListener("click", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);
// optionSelect.addEventListener("click", wrongChoice);






