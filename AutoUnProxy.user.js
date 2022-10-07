// ==UserScript==
// @name         AutoUnProxy
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://unlock.wmeluna.com/main/*
// @icon         https://www.google.com/s2/favicons?domain=wmeluna.com
// @downloadURL  https://github.com/WmeLuna/Dadeschools-Scripts/raw/main/AutoUnProxy.user.js
// @updateURL  https://github.com/WmeLuna/Dadeschools-Scripts/raw/main/AutoUnProxy.user.js
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    const {location, codec} = window.__uv
    if (location.host == "github.com") window.location.href = location.href
    // Your code here...
})();