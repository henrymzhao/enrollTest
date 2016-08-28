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
      console.log("Looking for ID: " + document.getElementById(item));
      dummy = document.getElementById(item);
      if (dummy)
      {
        console.warn("Found ID: " + item);
        checkpoints.callback = true;
        ftn(dummy);
        clearInterval(checkThisLoaded);
      }
    }, 1000);
  }
  var checkpoints =
  {
    enrollDone : false,
    checkedDone : false
  };

  function checkEnroll(dummy)
  {
    dummy.click();
    console.log("Successfully clicked enroll");
  }
  function checkSemClick(dummy)
  {
    dummy.click();
    console.log("Successfully clicked semester");
  }

  if (window.location.href == 'https://go.sfu.ca/psp/paprd/EMPLOYEE/EMPL/h/?tab=SFU_STUDENT_CENTER')
  {
    masterCheckLoaded('DERIVED_SSS_SCR_SSS_LINK_ANCHOR3', checkEnroll, checkpoints.enrollDone);
  }
  if (window.location.href == 'https://go.sfu.ca/psp/paprd_1/EMPLOYEE/HRMS/c/SA_LEARNER_SERVICES.SSR_SSENRL_CART.GBL?Page=SSR_SSENRL_CART&Action=A&ExactKeys=Y&TargetFrameName=None')
  {
    masterCheckLoaded('DERIVED_SSS_SCT_SSR_PB_GO', checkSemClick, checkpoints.checkedDone);
  }
})();
