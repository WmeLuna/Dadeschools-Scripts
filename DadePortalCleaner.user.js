// ==UserScript==
// @name         DadePortalCleaner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       WmeLuna
// @match        https://mdcpsportal.dadeschools.net/*/default.aspx
// @downloadURL  https://github.com/WmeLuna/Dadeschools-Scripts/raw/main/DadePortalCleaner.user.js
// @icon         https://mdcpsportal.dadeschools.net/_layouts/images/siteIcon.png
// @grant        none
// ==/UserScript==
function kill(x) {
    document.querySelector(x).remove ();
}
(function() {
    let headImage = '<link rel="icon" href="https://mdcpsportal.dadeschools.net/_layouts/images/siteIcon.png">'
    document.querySelector("head").innerHTML += headImage;
    const bakimage = 'https://github.com/wmeluna/wmeluna.github.io/raw/main/v462-n-130-textureidea_1.jpg'
    document.querySelector("body.v4master").setAttribute("style", 'background: url('+ bakimage + ') !important')
    document.querySelector("body.v4master").setAttribute("style", 'background: url('+ bakimage + ') !important')
    kill("#toolbarContainer")
    kill("html > script")
    kill("#s4-leftpanel")
    kill("#zz9_TopNavigationMenuV4 > div > ul > li > a")
    document.querySelector(".s4-ca").style.marginLeft = '77.5px'
    document.querySelector(".s4-ca").style.marginRight = '77.5px'

    document.querySelector("#zz8_Menu > span").innerHTML = 'Martinez, Luna T - 0369291'
})();
