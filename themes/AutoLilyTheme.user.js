// ==UserScript==
// @name         AutoLilyTheme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       WmeLuna
// @match        https://unlock.wmeluna.com/main/*discord.com*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var theme = document.createElement('style');
    theme.innerText=`@import url('https://nyri4.github.io/LilyPichu/lilypichu.theme.css')`
    document.getElementsByTagName('head')[0].appendChild(theme);
    // Your code here...
})();
