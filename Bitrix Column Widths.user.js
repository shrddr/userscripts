// ==UserScript==
// @name         Bitrix Column Widths
// @namespace    https://github.com/shrddr/userscripts
// @version      1.0
// @description  try to take over the world!
// @author       shrddr
// @match        https://*.bitrix24.by/timeman/timeman.php
// @grant        none
// @require      https://raw.githubusercontent.com/shrddr/userscripts/main/waitForKeyElements.js
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';

    function modify(jNode) {
        //console.log('jNode:', jNode);
        jNode.css("width", "");
        jNode.find("span").css("width", "");
    }

    waitForKeyElements("thead.main-grid-header tr th", modify);
})();