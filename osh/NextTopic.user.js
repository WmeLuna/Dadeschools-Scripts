// ==UserScript==
// @name         NextTopic
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://campus.careersafeonline.com/view_topic.k2?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=careersafeonline.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelector('circle[fill="#646C77"]').parentElement.parentElement.click()
    // Your code here...
})();
