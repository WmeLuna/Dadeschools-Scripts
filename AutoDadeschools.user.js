// ==UserScript==
// @name         AutoDadeschools
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically sign in to dadeschools
// @author       WmeLuna
// @match        http*://auth.dadeschools.net/_auth/dsLogon.aspx?ru=*
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
