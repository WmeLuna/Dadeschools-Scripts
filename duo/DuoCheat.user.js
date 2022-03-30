// ==UserScript==
// @name         DuoCheat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @downloadURL  https://github.com/WmeLuna/Dadeschools-Scripts/raw/main/duo/DuoNext.user.js
// @description  try to take over the world!
// @author       You
// @match        https://www.duolingo.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=duolingo.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //makes questions have no delay between them
    var styleSheet = document.createElement("style")
    styleSheet.innerText = '* { transition-duration: 0s !important;}'
    document.head.appendChild(styleSheet)


    function dynamicInput(element, msg) {
        let input = element;
        let lastValue = input.value;
        input.value = msg;
        let event = new Event('input', { bubbles: true });
        event.simulated = true;
        let tracker = input._valueTracker;
        if (tracker) {
            tracker.setValue(lastValue);
        }
        input.dispatchEvent(event);
    }
    function getChallengeObj(theObject) {
        let result = null;
        if (theObject instanceof Array) {
            for (let i = 0; i < theObject.length; i++) {
                result = getChallengeObj(theObject[i]);
                if (result) {
                    break;
                }
            }
        }
        else {
            for (let prop in theObject) {
                if (prop == 'challenge') {
                    if (typeof theObject[prop] == 'object') {
                        return theObject;
                    }
                }
                if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                    result = getChallengeObj(theObject[prop]);
                    if (result) {
                        break;
                    }
                }
            }
        }
        return result;
    }
    function getChallenge() {
        const dataTestComponentClassName = 'e4VJZ';
        const dataTestDOM = document.getElementsByClassName(dataTestComponentClassName)[0];

        if (!dataTestDOM) {
            document.querySelectorAll(PLAYER_NEXT)[0].dispatchEvent(clickEvent);
            return null;
        } else {
            const dataTestAtrr = Object.keys(dataTestDOM).filter(att => /^__reactProps/g.test(att))[0];
            const childDataTestProps = dataTestDOM[dataTestAtrr];
            const { challenge } = getChallengeObj(childDataTestProps);
            return challenge;
        }
    }
    function answer() {
        try {document.querySelector('[data-test="player-next"]:not(.LhRk3)').click()} catch { }
        try {document.querySelector('[data-test="player-toggle-keyboard"] ._25C4L:not(._1ootc)').parentElement.click()}catch{}
        if(getChallenge().type == 'translate') {
            dynamicInput(document.querySelector('[data-test="challenge-translate-input"]'), getChallenge()['correctSolutions'][0])
        } else if (getChallenge().type == 'name'){
            dynamicInput(document.querySelector('[data-test="challenge-text-input"]'), getChallenge()['correctSolutions'][0])
        } else if (getChallenge().type == 'tapComplete') {
            getChallenge().correctIndices.forEach(number => document.querySelectorAll('[data-test="word-bank"] [data-test="challenge-tap-token"]')[number].click())
        } else if (getChallenge().type == 'typeCompleteTable') {
            //tables are so icky
        } else {try{document.querySelector('[data-test="player-skip"]').click()}catch{}}

    }
    function loop() {
        try {
            answer()
            setTimeout(loop, 10);
        }
        catch {
            setTimeout(loop, 10);
        }
    }
    loop()
    // Your code here...
})();
