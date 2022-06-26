// ==UserScript==
// @name         BetterGithubMobile
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://github.com/*
// @icon         https://github.com/fluidicon.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var topSidebar = document.createElement("style")
    topSidebar.innerText = '#js-repo-pjax-container .Layout{display:flex!important;flex-direction:column!important}.Layout .Layout-main{order:2}.Layout .Layout-sidebar{order:1}'
    document.head.appendChild(topSidebar)
    document.querySelector('a[href*="graphs/contributors"]').parentElement.parentElement.parentElement.setAttribute('hidden', '')
    // Your code here...
})();
