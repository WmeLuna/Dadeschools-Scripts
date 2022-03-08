// ==UserScript==
// @name         Next
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://campus.careersafeonline.com/view_content.k2?pageid=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=careersafeonline.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    function next() {
        try {
        document.querySelector("#footer_next_page").click()
        setTimeout(next, 250);
        }
        catch {
        setTimeout(next, 250);
        }
    }
    next()
})();
