// ==UserScript==
// @name         Hide Correct Questions
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       Wmeluna
// @match        https://www.webassign.net/web/Student/Assignment-Responses/*
// @icon         https://avatars.githubusercontent.com/u/507998
// @grant        none
// ==/UserScript==


/*
    var questions = $(document.querySelector('.waQBox').getAttribute('id')).retrieve('question').assignment.questions
    for (const key of questions) {
        if (JSON.parse(key.element.children[0].dataset.questionDisplay).score == JSON.parse(key.element.children[0].dataset.questionDisplay).total) {
            key.element.style.display = "none"
        }
    }
*/
(function () {
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement.innerText = `
var questions=$(document.querySelector(".waQBox").getAttribute("id")).retrieve("question").assignment.questions;for(const e of questions)JSON.parse(e.element.children[0].dataset.questionDisplay).score==JSON.parse(e.element.children[0].dataset.questionDisplay).total&&(e.element.addClass("hidden"));
    `;
    document.body.appendChild( scriptElement );
})();
