// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://go.sfu.ca/psp/paprd/EMPLOYEE/EMPL/h/?tab=SFU_STUDENT_CENTER
// @grant        none
// ==/UserScript==

(function() {
    var mainPage;
    do {
    mainPage = document.getElementById('win1divPAGECONTAINER');
    }
    while(!mainPage);
    alert("mainPage loaded");
})();
