// ==UserScript==
// @name         AutoDadeschools
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically sign in to dadeschools
// @author       WmeLuna
// @match        http*://auth.dadeschools.net/_auth/dsLogon.aspx?ru=*
// @downloadURL  https://github.com/WmeLuna/Dadeschools-Scripts/raw/main/AutoDadeschools.user.js
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==


(function() {
    let usernameElem = document.getElementById('txtUsername');
    let passwordElem = document.getElementById('txtPassword');
    if (usernameElem) {
        usernameElem.value = 'USERNAME';
        passwordElem.value = 'PASSWORD';
        document.querySelector('#btnLogon').click()
    }
})();
