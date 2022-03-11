// ==UserScript==
// @name         ConAns
// @namespace    http://tampermonkey.net/
// @version      0.3
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
    ansscr.innerText=`function ans(){try{document.querySelectorAll('.progress-circle[aria-label^="Question"]').forEach(function(t,e){"highlighted"==t.classList[t.classList.length-1]&&("object"==typeof ansKeyArray[e]?ansKeyArray[e].forEach(function(t,n){"true"!=document.querySelectorAll('.btn.btn-lg.activityBtns[class*="option"]')[ansKeyArray[e][n]].ariaPressed&&document.querySelectorAll('.btn.btn-lg.activityBtns[class*="option"]')[ansKeyArray[e][n]].click()}):document.querySelectorAll('.btn.btn-lg.activityBtns[class*="option"]')[ansKeyArray[e]].click())}),setTimeout(ans,250)}catch{setTimeout(ans,250)}}ans();`
    document.getElementsByTagName('head')[0].appendChild(ansscr)
    // Your code here...
})();
