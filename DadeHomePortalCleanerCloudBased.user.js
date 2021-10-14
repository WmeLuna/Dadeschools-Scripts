// ==UserScript==
// @name         DadeHomePortalCleanerCloudBased
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       WmeLuna
// @match        https://mdcpsportal.dadeschools.net/student/default.aspx
// @icon         https://mdcpsportal.dadeschools.net/_layouts/images/siteIcon.png
// @grant GM_xmlhttpRequest
// @require https://raw.githubusercontent.com/mitchellmebane/GM_fetch/master/GM_fetch.js
// ==/UserScript==
function kill(x) {
    document.querySelector(x).remove ();
}
fetch('https://wmealtapi.herokuapp.com/api/cor/https://wmealtapi.herokuapp.com/api/dadeschools')
    .then(function(response) {
    return response.json()
}).then(function(json) {
    for (var i in json.bookmarks) {
        document.getElementsByClassName("StudentInfoLinks")[0].innerHTML += json.bookmarks[i]
    }
}).catch(function(ex) {
    console.log('parsing failed', ex)
})

kill("#ctl00_MSO_ContentDiv > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr:nth-child(1)")
kill("#ctl00_MSO_ContentDiv > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr:nth-child(1)")
kill("#ctl00_MSO_ContentDiv > table > tbody > tr:nth-child(3) > td > table:nth-child(1) > tbody > tr:nth-child(1)")
kill("#ctl00_MSO_ContentDiv > table > tbody > tr:nth-child(3) > td > table:nth-child(2) > tbody > tr:nth-child(1)")
kill("#MSOZoneCell_WebPartctl00_m_g_304692b6_2b90_472a_bd8a_17ec9fea08ae > div")
kill(' #ctl00_ctl15_iprRibbon');
kill('body > style:nth-child(2)');
