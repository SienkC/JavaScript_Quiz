// if start button pressed "display = none" for home page
// loop through questions 
// move onto next question when answer chosen and subtract from time if wrong
// stop loop when time = 0
// show score and allow user to enter initials
// save score and initials to local storage
// score will show on score page

// Get elements from HTML
var startEl = document.querySelector("#start");
var main = document.querySelector("#display_main_page");
var questions = document.querySelector("#display_questions");
var timerEl = document.querySelector("#time");

const qAndA = {
    q1: {
        question: "Commonly used data types DO NOT include:",
        correct: "alerts",
        wrong1: "strings",
        wrong2: "booleans",
        wrong3: "numbers"
    },
    q2: {
        question: "Which symbols begin a comment in JavaScript?",
        correct: "//",
        wrong1: "<--",
        wrong2: "#",
        wrong3: "["
    },
    q3: {
        question: "Which method lets display text in the console?",
        correct: "console.log()",
        wrong1: "console.text()",
        wrong2: "console.prompt()",
        wrong3: "console.display()"
    },
    q4: {
        question: "Conditional statements start with:",
        correct: "if",
        wrong1: "when",
        wrong2: "for",
        wrong3: "about"
    },
    q5: {
        question: "__ is used to mean not equal to",
        correct: "!=",
        wrong1: "?=",
        wrong2: "==",
        wrong3: "+="
    }
};

// number of questions
var numQuest = Object.keys(qAndA).length;

// timer will count down from this number
var timer = 75;

startEl.addEventListener('click', function (event) {
    // if start button pressed home page is replaced with questions
    event.preventDefault();
    main.style.display = "none";
    questions.style.display = "contents";

    // timer starts
    timeLeft();

    // loop for questions
    var test = qAndA.q1;
    showQuestions(test);

    return;
});


// timer counts down every second (1000ms)
function timeLeft(){
    var timerInt = setInterval(function() {

        timerEl.textContent = "Time: " + timer;
        timer--;

        // Stops timer when it reaches 0
        if(timer === 0){
            clearInterval(timerInt);
        }

    }, 1000)
}

function showQuestions(questionNum) {
    // array for answer choices
    var choices = ["correct", "wrong1", "wrong2", "wrong3"];

    // randomize order of choices
    choices = shuffleArray(choices);

    // Show question
    document.querySelector("#question").textContent = questionNum.question;

    // loop to create answer choices
    for(let i = 0; i < choices.length; i++){
        var temp = document.createElement("li");
        temp.textContent = questionNum[choices[i]];
        document.querySelector("#answers").appendChild(temp);
    }
    
    return;
}

// Based on Fisher-Yates shuffle algorithm
function shuffleArray(choices) {
    var currentValue = choices.length;
    var randomValue;
    var temp;

    // currentValue will get smaller until 0
    while (currentValue != 0) {
        // New index for current value
        randomValue = Math.floor(Math.random() * currentValue);
        currentValue--;

        // Temp holds onto previous value, so it is not forgotten
        temp = choices[currentValue];

        // Swap items in both indexes
        choices[currentValue] = choices[randomValue];
        choices[randomValue] = temp;
    }

    return choices;
}