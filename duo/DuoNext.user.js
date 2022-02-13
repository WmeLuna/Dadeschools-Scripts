// ==UserScript==
// @name         DuoNext
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.duolingo.com/*
// @icon         https://www.google.com/s2/favicons?domain=duolingo.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    function next() {
        try {
        if(document.querySelector('[data-test="player-next"]').classList[0] != 'LhRk3') {
            document.querySelector('[data-test="player-next"]').click()
        }
        setTimeout(next, 250);
        }
        catch {
        setTimeout(next, 250);
        }
    }
    next()
    // Your code here...
})();
