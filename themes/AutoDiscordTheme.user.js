// ==UserScript==
// @name         AutoDiscordTheme
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       WmeLuna
// @match        https://unlock.wmeluna.com/main/*discord.com*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=discord.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    var theme = document.createElement('style');
    theme.innerText=`@import url('https://lucord.wmeluna.com/theme.css')`
    document.getElementsByTagName('head')[0].appendChild(theme);
})();
