// ==UserScript==
// @name         GoosemodTetherlessInject
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://womginx.wmeluna.repl.co/main/*discord.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=repl.co
// @grant        none
// @run-at      document-idle

// ==/UserScript==

(function() {
    'use strict';
const scr = document.createElement('script');
scr.src = 'https://raw.githack.com/GooseMod/GooseMod/dist-prod/index.js';
document.head.appendChild(scr);
    // Your code here...
})();