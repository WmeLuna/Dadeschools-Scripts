// ==UserScript==
// @name         AutoUnblocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://localhost:6543/block_screen.html?id=*
// @icon         https://avatars.githubusercontent.com/u/46545277
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var scr = document.createElement('script');
    scr.type="text/javascript";
    scr.innerText=`function b(){0==a.href.includes("localhost")?location.href="https://unlock.wmeluna.com/main/"+a.href:setTimeout(b,250)}b();`
    document.getElementsByTagName('head')[0].appendChild(scr)
})();
