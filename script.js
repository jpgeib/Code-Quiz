//Quiz elements
const currentQuestionIndex = 0;


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
    let timeInterval = setInterval(function () {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds remaining...";

      if (secondsLeft === 0) {
        clearInterval(timeInterval);
        alert("Time has run out! Refresh the page to try again.")
      }
    }, 1000);
  };

  timeLimit();

  getQuestion();
};

function getQuestion() {
  
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.answers');

  let numCorrect = 0;

  myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === currentQuestion.correctAnswer) {
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    } else {
      answerContainers[questionNumber].style.color = 'red';
    }
  });
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
};



//Page functions

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;

  if (currentSlide === 0) {
    previousButton.style.display = 'none';
  } else {
    previousButton.style.display = 'inline-block';
  };

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  } else {
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  };
};

function showNextSlide() {
  showSlide(currentSlide + 1);
};

function showPreviousSlide() {
  showSlide(currentSlide - 1);
};








//Initialize the quiz
buildQuiz();


//Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

//Show the first slide

showSlide(currentSlide);


//Event listeners

submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
optionSelect.addEventListener("click", wrongChoice);






