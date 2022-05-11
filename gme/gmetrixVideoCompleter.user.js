// ==UserScript==
// @name         gmetrixVideoCompleter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.gmetrix.net/Courses/Course.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gmetrix.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        function next() {
        try {
            document.querySelector('.responsive-video-iframe video').currentTime = document.querySelector('.responsive-video-iframe video').duration
        setTimeout(next, 100);
        }
        catch {
        setTimeout(next, 100);
        }
    }
    next()


    // Your code here...
})();