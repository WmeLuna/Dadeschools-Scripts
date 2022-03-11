// ==UserScript==
// @name         ReSubmit
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://campus.careersafeonline.com/view_question.k2?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=careersafeonline.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('.assessmentSubmitButton[disabled]').removeAttribute('style')
    document.querySelector('.assessmentSubmitButton[disabled]').removeAttribute('disabled')
    // Your code here...
})();
