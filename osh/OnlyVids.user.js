// ==UserScript==
// @name         OnlyVids
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://campus.careersafeonline.com/view_content.k2?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=careersafeonline.com
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';
    function next() {
        try {
            if (document.querySelector('#contentIframe').contentWindow.document.body.classList[0] != 'video-body') {
                document.querySelector("#footer_next_page").click()
            }
            document.querySelector('#contentIframe').contentWindow.document.querySelector('#vidContainer').onended= function() { document.querySelector("#footer_next_page").click(); }
            setTimeout(next, 1000);
        }
        catch {
            setTimeout(next, 1000);
        }
    }
    setTimeout(next, 1000);

    // Your code here...
})();
