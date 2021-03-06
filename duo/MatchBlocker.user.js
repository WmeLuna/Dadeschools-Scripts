// ==UserScript==
// @license WTFPL
// @name         MatchBlocker
// @namespace    http://tampermonkey.net/
// @version      0.2
// @updateURL  https://github.com/WmeLuna/Dadeschools-Scripts/raw/main/duo/MatchBlocker.user.js
// @downloadURL  https://github.com/WmeLuna/Dadeschools-Scripts/raw/main/duo/MatchBlocker.user.js
// @description  Block the annoying 'match'-challange
// @author       Me
// @match        https://www.duolingo.com/*
// @icon         https://github.com/WmeLuna/Dadeschools-Scripts/raw/main/duo/12215d986b2905ef9483.png
// @grant        none
// ==/UserScript==
(function(send, open) {
    'use strict';
    let blockedTypes = ["tapCloze","match","tapCompleteTable", "tapComplete", "dialogue", "assist", "definition", "gapFill", "readComprehension", "listenTap"]
    // Override send() method to change request body
    XMLHttpRequest.prototype.send = function(body) {
        let modifiedBody = body;
        // Is game session. Modify
        if (this.url.endsWith("sessions")) {
            let parsedBody = JSON.parse(modifiedBody);
            blockedTypes.forEach(type => {
                let typeIndex = parsedBody.challengeTypes.indexOf(type);
                if (typeIndex != -1) {
                    console.log("Blocking " + type, parsedBody.challengeTypes);
                    parsedBody.challengeTypes.splice(typeIndex, 1);
                }
            });
            modifiedBody = JSON.stringify(parsedBody);
        }
        send.apply(this, [modifiedBody]);
    };
    // Override open() method to intercept request URL
    XMLHttpRequest.prototype.open = function(method, url) {
        this.url = url;
        open.apply(this, arguments);
    }
})(XMLHttpRequest.prototype.send, XMLHttpRequest.prototype.open);
