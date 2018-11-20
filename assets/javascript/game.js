/*------------------------------------------------------------------------------------------------------------------------------------------
//runs at startup
--------------------------------------------------------------------------------------------------------------------------------------------*/
$(document).ready(function () {
  //reset on page load
  window.onload = function () {
    reset();
  };
  /*------------------------------------------------------------------------------------------------------------------------------------------
    //Variables
    --------------------------------------------------------------------------------------------------------------------------------------------*/
  let timeLeft = 5;
  let countdownTimer;

  // let setQuestion = document.getElementById("questionContainer").textContent = question;
  
  // let answers = [];
  // let correct = [];
  let wrongAnswer = ["penguin", "hummingbird", "duck"];
  let picked = [];
  let correctGuess = 0;
  let wrongGuess = 0;
  answerBox = [];

  //let questionValue = document.getElementById('questionContainer').innerHTML = birdQuestion;
  // let answerValue = document.getElementById("answer1-text").innerHTML = answer;

  /*------------------------------------------------------------------------------------------------------------------------------------------
//scripts
--------------------------------------------------------------------------------------------------------------------------------------------*/
  //Questions
 
  let birdQuestions = {
    question: "As far as reasoning power goes, what is the most intelligent family of birds?",
      answers: ["crow", "penguin", "hummingbird", "ostrich"],
      correct: "crow"
  }/*,

      birdQuestions = {
      question: "What bird is the international symbol of happiness?",
      answers: ["hummingbird", "bluebird", "booby", "sparrow"],
      correct: "bluebird"
  };*/
    
  // for(i=1; i<4; i++){
  // $('label[for=answerText1]').html("birdQuestions.question");
  // }

  //Question 1
  // $("#questionContainer")


  /*------------------------------------------------------------------------------------------------------------------------------------------
//functions
--------------------------------------------------------------------------------------------------------------------------------------------*/
//reset/ initialize the game
function reset() {
  setQuestion();
  // setAnswers();
  setTimer();

}  

//set timer to 30 seconds
function setTimer() {
    countdownTimer = setInterval(function () {
      timeLeft--;
      $("#timerContainer").text("TIME REMAINING: " + timeLeft);
      if (timeLeft <= 0) clearInterval(countdownTimer);
    }, 1000);

    if (timeLeft === 0) {
      $("#timerContainer").text("Time's Up!");
      console.log("times");
    }
  }

  //assign questions
  function setQuestion() {
    for(i = 1; i < birdQuestions.question.length; i++) {

    
    $("#questionText"+[i]).text(birdQuestions.question);
    console.log("question: " + birdQuestions.question);

  
    }
  }

  // function setAnswers() {

  //   for(i = 0; i < answers.length; i++)
  //   $("#answerText1"+[i]).text(answers[i])
  // }

  
  /*
    function setQuestion() {
      //pick a random question
      let randomQuestion = Math.floor(Math.random() * birdQuestion.length);
      $("#questionContainer").text(birdQuestion[randomQuestion]);

      if (picked != [randomQuestion]) {
        picked.push([randomQuestion]);

      } else {
        randomQuestion;
      }

      //assign correct answer to random button
      answerBox = Math.floor(Math.random() * 4) + 1;
      let randomAnswer = $("#answer-text" + [answerBox]).text(
        answer[randomQuestion]
      );

      //assign wrong answers to remaining buttons
      let wrongAnswer = Math.floor(Math.random() * birdQuestion.length);
      $("#questionContainer").text(birdQuestion[randomQuestion]);
    }

    function setCorrectAnswer() {
      answerBox = Math.floor(Math.random() * 4) + 1;

      let randomAnswer = $("#answer-text" + [answerBox]).text(
        answer[randomQuestion]
      );
    }
  */



  /*--------------------------------------------------------------------------------------------------------------------------------------------*/
}); // ready close