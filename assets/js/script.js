// if start button pressed "display = none" for home page
// loop through questions 
// move onto next question when answer chosen and subtract from time if wrong
// stop loop when time = 0
// show score and allow user to enter initials
// save score and initials to local storage
// score will show on score page

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

// if start button pressed "display = none" for home page
var startEl = document.querySelector('#start');
var main = document.querySelector("#display_main_page");
var questions = document.querySelector("#display_questions");

startEl.addEventListener('click', function (event) {
    event.preventDefault();
    main.style.display = "none";
    questions.style.display = "contents";

    // timer starts
    // show questions


    });
