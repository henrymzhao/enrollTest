// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://go.sfu.ca/*
// @grant        none
// ==/UserScript==

(function() {
  function masterCheckLoaded(item, ftn, callback)
  {
    var dummy;
    var checkThisLoaded = setInterval(function ()
    {
      console.log("Looking for ID: " + item);
      dummy = document.getElementById(item);
      if (dummy)
      {
        console.warn("Found ID: " + item);
        ftn(dummy);
        callback = true;
        console.warn(callback);
        clearInterval(checkThisLoaded);
      }
    }, 500);
  }

  var enrollDone = false;
  function checkEnroll(dummy)
  {
    dummy.click();
    console.log("Successfully clicked enroll");
  }
  masterCheckLoaded('DERIVED_SSS_SCR_SSS_LINK_ANCHOR3', checkEnroll, enrollDone);
  console.error(enrollDone);


  // var checkedDone = false;
  // function checkSemClick(dummy)
  // {
  //   dummy.checked = true;
  //   console.log("Successfully clicked semester");
  // }
  // console.error(enrollDone, checkedDone);
  // while (enrollDone && !checkedDone)
  // {
  //   masterCheckLoaded('SSR_DUMMY_RECV1$sels$1$$0', checkSemClick, checkedDone);
  // }
})();
