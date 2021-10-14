// ==UserScript==
// @name         Dade404Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       WmeLuna
// @match        https://*.dadeschools.net/*
// @icon         https://www.google.com/s2/favicons?domain=dadeschools.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var img = document.querySelectorAll("img")
    for (let i=0; i<=img.length; i++) {

        console.log(img[i].naturalWidth)
        if (img[i].naturalWidth == 0 ) {
            img[i].style.display = "none"
        }
    }

})();