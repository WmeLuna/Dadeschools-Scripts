// ==UserScript==
// @name         AutoUnblocker
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       WmeLuna
// @match        https://localhost:6543/block_screen.html?id=*
// @icon         https://avatars.githubusercontent.com/u/46545277
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var theme = document.createElement('style');
    theme.innerText=`body{background:#000}.blockScreen-svg g{stroke:white!important}.blockScreen-stripe{background:purple!important}.blockScreen{flex-direction: row!important}.blockScreen-systemMessage,.blockScreen-customBodyText{display:none}.blockScreen-customSchoolName{position: absolute; z-index: 999; left: 70px;}.blockScreen-svg {position: absolute; z-index: 999; left: 10px;}`
    document.getElementsByTagName('head')[0].appendChild(theme);

    var scr = document.createElement('script');
    scr.type="text/javascript";
    scr.innerText=`function b(){0==a.href.includes("localhost")?location.href="https://unlock.wmeluna.com/main/"+a.href:setTimeout(b,250)}b();`
    document.getElementsByTagName('head')[0].appendChild(scr)
})();
