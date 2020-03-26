//DOM elements
  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const timer = document.querySelector(".time");
  const mainEl = document.getElementById("main");
  const leaderboardContainer = document.getElementById("leaderboard");
  var secondsLeft = 101;
  const optionSelect = document.getElementsByClassName("radioname");

  //Building the quiz
  function buildQuiz() {
    const output = [];

    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
            <input class="radioname" type="radio" name="question${questionNumber}" value="${letter}" onclick="questionClick(${letter});">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
          );
        };

        output.push(
          `<div class="slide">
        <div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>
        </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  };

  //Showing the results


  


  
  // let questionIndex = 0;


  // // function for rendering  questions takes an index

  // // using the question, render the 1st question
  // function renderQuestion(index) {
  //   const currentQuestion = myQuestions[index];
  //   for(let answer in currentQuestion.answers){
  //     //  Key to the current question a, b, or c
  //     answer
  //     // Actual value
  //     currentQuestion.answers[answer];
  //   }

  // }

  // function for checking answer

  // add event listner to the button
  // event prevent Default
  // check to see if questionIndex is within the bounds of your questions Array
  // set questionIndex = 0
  // if so, return 
  // using JS grab the value from the inputs
  // using the questionIndex variable, check to see if answer is correct
  // if wrong subract tijme
  //  else do 
  // increment questionIndex by 1
  // call renderQuestion function
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

  const wrongChoice = function() {
    const userInput = optionSelect;
    
    if(userInput = myQuestions[0].answers.a || myQuestions[0].answers.b) {
      secondsLeft - 15;
    } else if(userInput = myQuestions[1].answers.a || myQuestions[1].answers.b) {
      secondsLeft - 15;
    } else if(userInput = myQuestions[2].answers.a || myQuestions[2].answers.b || myQuestions[2].answers.c) {
      secondsLeft - 15;
    } else if(userInput = myQuestions[3].answers.a || myQuestions[3].answers.c || myQuestions[3].answers.d) {
      secondsLeft - 15;
    } else if(userInput = myQuestions[4].answers.b || myQuestions[4].answers.c || myQuestions[4].answers.d) {
      secondsLeft - 15;
    };
    resultsContainer.innerHTML = `${userInput} is wrong! Choose something else.`
  };

  //Timer functions

  function timeLimit(chosenTime) {
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

  




