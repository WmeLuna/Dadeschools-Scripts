// ==UserScript==
// @name         CommonLitPreAssessAnswer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.commonlit.org/en/students/student_lessons/*
// @icon         https://www.google.com/s2/favicons?domain=commonlit.org
// @grant        unsafeWindow
// ==/UserScript==



(function() {
    'use strict';
    var tasks = JSON.parse(document.querySelector("#SupplementalTextStudentLesson").getAttribute("data-props"))["tasks"]
    var resp;
    fetch("https://www.commonlit.org/en/api/v1/activities/" + tasks[2]["activityId"] + "?student_lesson_activity_id=" + tasks[2]["studentLessonActivityId"], {"method": "GET"}).then(response => { return response.json()}).then(data => { resp = data.questions })
    function waitForElement(){
        if(typeof resp !== "undefined"){
            console.log(resp)
            Object.keys(resp).forEach(key => {
                console.log(resp[key]["content"])
                Object.keys(resp[key]["answerOptions"]).forEach(ans => {
                    //console.log(resp[key]["answerOptions"][ans])
                    if (resp[key]["answerOptions"][ans]["correct"]) {
                        console.log(resp[key]["answerOptions"][ans]["id"])
                        var style = document.createElement('style');
                        style.innerHTML = '#cfu-answer-' + resp[key]["answerOptions"][ans]["id"] + " { background: aqua;}";
                        document.head.appendChild(style);
                    }
                })
            })
        }
        else{
            setTimeout(waitForElement, 250);
        }
    }
    waitForElement()
})();