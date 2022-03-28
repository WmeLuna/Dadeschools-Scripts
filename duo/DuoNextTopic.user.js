// ==UserScript==
// @name         DuoNextTopic
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
            document.querySelectorAll('.pJanB:not(._3qgm9)')[0].parentNode.parentNode.parentNode.click()
            setTimeout(next, 500);
        }
        catch {
            setTimeout(next, 500);
        }
    }
    next()
    // Your code here...
})();
