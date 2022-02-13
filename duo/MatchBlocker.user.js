// ==UserScript==
// @license WTFPL
// @name         MatchBlocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block the annoying 'match'-challange
// @author       Me
// @match        https://www.duolingo.com/*
// @icon         https://www.google.com/s2/favicons?domain=duolingo.com
// @grant        none
// ==/UserScript==
(function(send, open) {
    'use strict';
    let blockedTypes = ["match", "tapComplete", "dialogue", "assist", "definition", "gapFill", "readComprehension", "listenTap"]
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