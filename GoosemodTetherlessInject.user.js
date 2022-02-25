// ==UserScript==
// @name         GoosemodTetherlessInject
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://unlock.wmeluna.com/main/*discord.com/*
// @match        https://lunadisco.herokuapp.com/main/*discord.com/*
// @icon         https://goosemod.com/img/logo.jpg
// @grant        none
// @run-at       document-idle

// ==/UserScript==

(function() {
    'use strict';
const scr = document.createElement('script');
scr.src = 'https://raw.githack.com/GooseMod/GooseMod/dist-prod/index.js';
document.head.appendChild(scr);
    // Your code here...
})();
