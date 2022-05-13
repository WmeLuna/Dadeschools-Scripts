// ==UserScript==
// @name         AutoUnblocker
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  try to take over the world!
// @author       WmeLuna
// @match        https://localhost:6543/block_screen.html?id=*
// @icon         https://avatars.githubusercontent.com/u/46545277
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var theme = document.createElement('style');
    theme.innerText=`body{background:#000}.blockScreen-svg g{stroke:white!important}.blockScreen-stripe{background:purple!important}.blockScreen{flex-direction: row!important}.blockScreen-customSchoolName{position: absolute; z-index: 999; left: 70px;}.blockScreen-svg {position: absolute; z-index: 999; left: 10px;}.blockScreen-systemMessage, .blockScreen-customBodyText {margin:unset; color:white; position: absolute; z-index: 999; right: 10px;}.blockScreen .blockScreen-systemMessage{display:none}`
    document.getElementsByTagName('head')[0].appendChild(theme);

    var scr = document.createElement('script');
    scr.type="text/javascript";
    scr.innerText=`function b(){if(!a.href.includes("localhost")){window.stop();location.href="https://unlock.wmeluna.com/main/"+encodeURIComponent(a.href)}else{setTimeout(b,10)}}b();`
    document.getElementsByTagName('head')[0].appendChild(scr)
})();
