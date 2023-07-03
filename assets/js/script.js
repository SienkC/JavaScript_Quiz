// if start button pressed "display = none" for home page
// loop through questions 
// move onto next question when answer chosen and subtract from time if wrong
// stop loop when time = 0
// show score and allow user to enter initials
// save score and initials to local storage
// score will show on score page

// if start button pressed "display = none" for home page
var startEl = document.querySelector('#start');
var main = document.querySelector("#display_main_page");
var questions = document.querySelector("#display_questions");

startEl.addEventListener('click', function (event) {
    event.preventDefault();
    main.style.display = "none";
    questions.style.display = "contents";
    });
