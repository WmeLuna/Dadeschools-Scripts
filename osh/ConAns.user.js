// ==UserScript==
// @name         ConAns
// @namespace    http://tampermonkey.net/
// @version      0.1
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

    // Your code here...
})();