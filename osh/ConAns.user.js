// ==UserScript==
// @name         ConAns
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://campus.careersafeonline.com/media/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=careersafeonline.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var scr = document.createElement('script');
    scr.type="text/javascript";
    scr.innerText=`function b(){if(void 0===window.top.questionsCombined||0==window.top.questionsCombined)var questionName=eval("KCObject");else var questionName=eval("KCActivity_"+pageNumber);ansKeyArray=questionName.getAnswer().slice();console.log(ansKeyArray);}b();`
    document.getElementsByTagName('head')[0].appendChild(scr)

    var ansscr = document.createElement('script');
    ansscr.type="text/javascript";
    ansscr.innerText=`function ans(){try{document.querySelectorAll('.progress-circle[aria-label^="Question"]').forEach(function(e,t){"highlighted"==e.classList[e.classList.length-1]&&("object"==typeof ansKeyArray[t]?ansKeyArray[t].forEach(function(e,o){"true"!=document.querySelectorAll('.ma-btn-options[class*="option"]')[ansKeyArray[t][o]].ariaPressed&&document.querySelectorAll('.ma-btn-options[class*="option"]')[ansKeyArray[t][o]].click()}):document.querySelectorAll('.mc-btn-options[class*="option"]')[ansKeyArray[t]].click())}),setTimeout(ans,250)}catch{setTimeout(ans,250)}}ans();`
    document.getElementsByTagName('head')[0].appendChild(ansscr)
    // Your code here...
})();
