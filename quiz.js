
const questionAudio1 = new Audio("Audio/FactOrMyth1.mp3");
const questionAudio2 = new Audio("Audio/FactOrMyth2.mp3");
const questionAudio3 = new Audio("Audio/FactOrMyth3.mp3");
var QuizQuestion = [
  {
    showButtons: true,
    correctAnswer: true,
    showExplanation: false,
    isAnswered: false,
    isCorrect: null,
    audioLog: questionAudio1,
    correctText: "Correct! This is a fact.",
    incorrectText: "Incorrect! This is a fact.",
    questionText: "A person's level of intoxication (or drunkenness) is impacted by how much they weigh.",
    explanationText: "Weight is an important factor impacting a person's blood alchohol content. which is a measure of how intoxicated a person is. The more someone weighs the more alcohol it takes to raise their blood alcohol level. Conversely, if someone weighs very little, it may only take a small amount of alcohol for them to begin feeling the effects."
  },
  {
    showButtons: true,
    correctAnswer: false,
    showExplanation: false,
    isAnswered: false,
    isCorrect: null,
    audioLog: questionAudio2,
    correctText: "Correct! This is a myth.",
    incorrectText: "Incorrect! This is a myth.",
    questionText: "If a male and female are the same height and weight and drink the same amount of alcohol, they would have similar levels of intoxication.",
    explanationText: "Even with identical weights, females will be affected greater by alcohol due to several biological differences. Females tend to have more body fat(and males more muscle mass) which leaves less space in the body for the alcohol to distribute. Also, females make less of the enzyme our bodies use to break alcohol down."
  },
  {
    showButtons: true,
    correctAnswer: false,
    showExplanation: false,
    isAnswered: false,
    isCorrect: null,
    audioLog: questionAudio3,
    correctText: "Correct! This is a myth.",
    incorrectText: "Incorrect! This is a myth.",
    questionText: "Drinking a cup of coffee, taking a cold shower, eating bread, or drinking lots of water will sober someone up when they are drunk.",
    explanationText: "Time is the only thing that can sober someone up. None of these things help you decrease your blood alcohol content. The only thing a person can do to sober up is to let time pass and allow their body to break down the alcohol and then eliminate it."
  },
]

var questionIndex = 0;
var totalCorrectAnswers = 0;
var totalIncorrectAnswers = 0;
var totalUnanswered = 3;
var MaxQuestionIndex = 2; // total amount of quiz questions, minus one. 
var currentQuestionIndex = 0; // what question to load



const fact = document.getElementById('fact');
const myth = document.getElementById('myth');
const reset = document.getElementById('reset');
document.onload = LoadQuestion();

// loads and updates questions.
function LoadQuestion(){
  var qst = document.getElementById("questText");
  UpdateButtonAppearance();
  UpdateExplanation();
  if (QuizQuestion[currentQuestionIndex].isAnswered == true){
    if(QuizQuestion[currentQuestionIndex].isCorrect == true){
    }
    playSound(QuizQuestion[currentQuestionIndex].audioLog);
    DisableButtons();
  }
  else
  {
    EnableButtons();
  }
  qst.innerHTML = QuizQuestion[currentQuestionIndex].questionText;
}

// a debugging tool to see current question data
function debugQuestionData(x){
  console.log(QuizQuestion[x].showButtons);
  console.log(QuizQuestion[x].correctAnswer);
  console.log(QuizQuestion[x].showExplanation);
  console.log(QuizQuestion[x].isAnswered);
}

function UpdateButtonAppearance(){
  if(QuizQuestion[currentQuestionIndex].isCorrect == null)
  {
    fact.style.background = 'linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)';
    myth.style.background = 'linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)';
  }

  if(QuizQuestion[currentQuestionIndex].isCorrect == true){
    if(QuizQuestion[currentQuestionIndex].correctAnswer == true)
    {
      fact.style.background = 'linear-gradient(#44c767, #5cbf2a)';
      myth.style.background = 'linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)';
    }
    else if (QuizQuestion[currentQuestionIndex].correctAnswer == false)
    {
      fact.style.background = 'linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)';
      myth.style.background = 'linear-gradient(#44c767, #5cbf2a)';
    }
  }
  else if(QuizQuestion[currentQuestionIndex].isCorrect == false){
    if(QuizQuestion[currentQuestionIndex].correctAnswer == true)
    {
      fact.style.background = 'linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)';
      myth.style.background = 'linear-gradient(#e4685d, #eb675e)';
    }
    else
    {
      fact.style.background = 'linear-gradient(#e4685d, #eb675e)';
      myth.style.background = 'linear-gradient(to bottom, #ffec64 5%, #ffab23 100%)';
    }
  }

}

// reviews the inputed answer, and updates each question accordingly
function checkAnswer(answer){
  if (answer == QuizQuestion[currentQuestionIndex].correctAnswer)
  {
    QuizQuestion[currentQuestionIndex].isAnswered = true;
    QuizQuestion[currentQuestionIndex].isCorrect = true;
    totalCorrectAnswers++;
    totalUnanswered--;
    UpdateButtonAppearance();
  }
  else
  {
    QuizQuestion[currentQuestionIndex].isAnswered = true;
    QuizQuestion[currentQuestionIndex].isCorrect = false;
    totalIncorrectAnswers++;
    totalUnanswered--;
    UpdateButtonAppearance();
  }
  UpdateExplanation();
  DisableButtons();
}

// checks if the button pressed was the right one
function isAnswerFact(){
  playSound(QuizQuestion[currentQuestionIndex].audioLog);
  checkAnswer(true);
}
function isAnswerMyth(){
  playSound(QuizQuestion[currentQuestionIndex].audioLog);
  checkAnswer(false);
}

// updates the explanation and answer text boxes
function UpdateExplanation() {
  // if a question is answered, display the explanation text and answer text.
  if (QuizQuestion[currentQuestionIndex].isAnswered)
  {
    if(QuizQuestion[currentQuestionIndex].isCorrect == true)
    {
      document.getElementById("answer").innerHTML = QuizQuestion[currentQuestionIndex].correctText;
      document.getElementById("answer").style.color = '#17FF29';

    }
    else
    {
      document.getElementById("answer").innerHTML = QuizQuestion[currentQuestionIndex].incorrectText;
      document.getElementById("answer").style.color = '#FF0000';
    }
    document.getElementById("expText").innerHTML = QuizQuestion[currentQuestionIndex].explanationText;
  }
  else
  { // if a question isn't answered, simply display no text
    document.getElementById("answer").innerHTML = "";
    document.getElementById("expText").innerHTML = "";
  }
}

function NextQuestion() {
  if (currentQuestionIndex == MaxQuestionIndex)
  {
    stopSound(QuizQuestion[currentQuestionIndex].audioLog);
    currentQuestionIndex = 3;
    LoadResults();
    return;
  }
  if (currentQuestionIndex < MaxQuestionIndex)
  {
    currentQuestionIndex++;
    console.log(currentQuestionIndex);
    stopSound(QuizQuestion[currentQuestionIndex].audioLog);
    LoadQuestion();
  }
}

function LoadResults() {
  document.getElementById("questText").innerHTML = "Correct: " + totalCorrectAnswers + '<br>' + "Incorrect: " + totalIncorrectAnswers + '<br>' + "Unanswered: " + totalUnanswered;
  document.getElementById("answer").innerHTML = "";
  document.getElementById("expText").innerHTML = "";
  fact.style.visibility = 'hidden';
  myth.style.visibility = 'hidden';
}

function PrevQuestion(){
  if (currentQuestionIndex != 0)
  {
    currentQuestionIndex--;
    console.log(currentQuestionIndex);
    fact.style.visibility = 'visible';
    myth.style.visibility = 'visible';
    stopSound(QuizQuestion[currentQuestionIndex].audioLog);
    LoadQuestion();
  }
}

function CorrectAns(){
  DisableButtons();
  UpdateExplanation();
}

function IncorrectAns(){
  DisableButtons();
  UpdateExplanation();
}

function DisableButtons(){
  fact.disabled = true;
  myth.disabled = true;
}

function EnableButtons(){
  fact.disabled = false;
  myth.disabled = false;
}

function ResetQuiz(){
  location.reload();
}

var audio;
function playSound(sound){
  //const audio = new Audio("Audio/FactOrMyth1.mp3");
  audio = sound;
  audio.play();
}

function stopSound(sound){
  // = sound;
  audio.pause();
  audio.currentTime = 0;
}