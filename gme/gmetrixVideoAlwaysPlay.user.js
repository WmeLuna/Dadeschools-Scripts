// ==UserScript==
// @name         gmetrixVideoAlwaysPlay
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
            try { document.querySelector('.responsive-video-iframe .vjs-big-play-button').click() } catch { }
            document.querySelector('.responsive-video-iframe video').play()
            setTimeout(next, 100);
        }
        catch {
            setTimeout(next, 100);
        }
    }
    next()


    // Your code here...
})();
