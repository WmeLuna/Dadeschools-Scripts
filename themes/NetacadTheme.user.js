// ==UserScript==
// @name         NetacadTheme
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       WmeLuna
// @match        https://*.netacad.com/*
// @match        https://lms.netacad.com/*
// @match        https://assessment.netacad.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=netacad.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var theme = document.createElement('style');
    theme.innerText=`@import url("https://css.wmeluna.com/netacad.css");`
    document.getElementsByTagName('head')[0].appendChild(theme);
    // Your code here...
})();
