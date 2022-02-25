// ==UserScript==
// @name         AutoUnblocker
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       WmeLuna
// @match        https://localhost:6543/block_screen.html?id=*
// @icon         https://avatars.githubusercontent.com/u/46545277
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var theme = document.createElement('style');
    theme.innerText=`body{background:#000}.blockScreen-svg g{stroke:purple!important}.blockScreen-stripe{background:purple!important}`
    document.getElementsByTagName('head')[0].appendChild(theme);

    var scr = document.createElement('script');
    scr.type="text/javascript";
    scr.innerText=`function b(){0==a.href.includes("localhost")?location.href="https://unlock.wmeluna.com/main/"+a.href:setTimeout(b,250)}b();`
    document.getElementsByTagName('head')[0].appendChild(scr)
})();
