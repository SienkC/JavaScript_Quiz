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
var scoreEntry = document.querySelector("#display_end");
var timerEl = document.querySelector("#time");
var submitE1 = document.querySelector("#submit");

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
// var numQuest = Object.keys(qAndA).length;
var allQuest = ["q1", "q2", "q3", "q4", "q5"];

// timer is not in a function so it can be used everywhere
var timer;

startEl.addEventListener('click', function (event) {
    // if start button pressed home page is replaced with questions
    event.preventDefault();
    main.style.display = "none";
    questions.style.display = "contents";

    // Timer will count down from this number
    timer = 75;

    // timer starts
    var timerInt = setInterval(function() {

        timer--;
        timerEl.textContent = "Time: " + timer;

        // Stops timer when it reaches 0
        if(timer === 0){
            clearInterval(timerInt);
        }
    }, 1000);
    
    // When timer reaches 0 before user answers all questions
    var endQuestions = setTimeout(showScoreEntry, timer * 1000);

    showQuestions(qAndA[allQuest[0]], 0, endQuestions, timerInt);

    return;
});

function showQuestions(questionNum, index, endQuestions, timerInt) {
    // array for answer choices
    var choices = ["correct", "wrong1", "wrong2", "wrong3"];

    // randomize order of choices
    choices = shuffleArray(choices);

    // Show question
    document.querySelector("#question").textContent = questionNum.question;

    // loop to create answer choices
    for(let i = 0; i < choices.length; i++){
        var temp = document.createElement("li");
        document.querySelector("#answers").appendChild(temp);
        temp = document.createElement("button");
        temp.textContent = questionNum[choices[i]];
        temp.setAttribute("id", choices[i]);
        document.querySelector("#answers").children[i].appendChild(temp);

        // test
        console.log(temp);

        // take note of right/wrong
        // call function again with next question

        // if user chooses correct answer
        if(choices[i] === "correct"){
            document.querySelector("#" + choices[i]).addEventListener('click', function(){

                // removes all created answer choices, so they wont be in next question
                for(let i = 0; i < choices.length; i++){
                    document.querySelector("#answers").children[0].remove();
                }

                // add text, so user knows if answer was correct
                document.querySelector("#result").textContent = "CORRECT! Nice work!";

                // will clear message after 1 second
                setTimeout(function(){
                    document.querySelector("#result").textContent = "";
                }, 1000);

                // index for question number increases
                index++;

                // check for if this is last question and end recursion
                // end timer that calls and call for initial entry page
                if(index === allQuest.length){
                    // clear both timers
                    clearTimeout(endQuestions);
                    clearInterval(timerInt);

                    // user brought to end
                    showScoreEntry();
                    return
                }

                showQuestions(qAndA[allQuest[index]], index, endQuestions, timerInt);
            });
        }
        // if user chooses a wrong answer
        else{
            document.querySelector("#" + choices[i]).addEventListener('click', function(){

                // subtract time penalty
                timer = timer - 10;

                // fix prev timer for entry page to match new timer

                // removes all created answer choices, so they wont be in next question
                for(let i = 0; i < choices.length; i++){
                    document.querySelector("#answers").children[0].remove();
                }

                // add text, so user knows if answer was wrong
                document.querySelector("#result").textContent = "INCORRECT! Ten seconds has been deducted from your time!";

                // will clear message after 1 second
                setTimeout(function(){
                    document.querySelector("#result").textContent = "";
                }, 1000);

                // index for question number increases
                index++;

                // check for if this is last question and end recursion
                // end timer that calls and call for initial entry page
                if(index === allQuest.length){
                    // clear both timers
                    clearTimeout(endQuestions);
                    clearInterval(timerInt);

                    // user brought to end
                    showScoreEntry();
                }

                showQuestions(qAndA[allQuest[index]], index, endQuestions, timerInt);
            });
        }
        
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

function showScoreEntry(){
    // go to initials entry
    questions.style.display = "none";
    scoreEntry.style.display = "contents";

    // display score
    document.querySelector("#final_score").textContent = "Your final score is " + timer;

    // User submits initals
    submitE1.addEventListener('click', function (event) {
        // save initials typed in text box
        // go to highscores page
    });
}