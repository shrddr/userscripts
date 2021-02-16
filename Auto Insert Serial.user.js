// ==UserScript==
// @name         Auto Insert Serial
// @namespace    https://github.com/shrddr/userscripts
// @version      1.0
// @description  try to take over the world!
// @author       shrddr
// @match        https://download.rockwellautomation.com/webupdates/enter.aspx
// @grant        none
// @require      https://raw.githubusercontent.com/shrddr/userscripts/main/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';
    waitForKeyElements("input#ctl00_MainContent_txtSerialNo", function (jNode) {
        //console.log('jNode:', jNode);
        jNode.val("xxx");
    });
    waitForKeyElements("select#ctl00_MainContent_ddlSearchParamters", function (jNode) {
        //console.log('jNode:', jNode);
        jNode.val("prk");
    });
    waitForKeyElements("input#ctl00_MainContent_txtSearchValue", function (jNode) {
        //console.log('jNode:', jNode);
        jNode.val("xxx");
    });
})();