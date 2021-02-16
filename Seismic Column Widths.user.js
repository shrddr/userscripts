// ==UserScript==
// @name         Seismic Column Widths
// @namespace    https://github.com/shrddr/userscripts
// @version      1.0
// @description  try to take over the world!
// @author       shrddr
// @match        https://ra.seismic.com/x5/doccenter.aspx
// @grant        none
// @require      https://raw.githubusercontent.com/shrddr/userscripts/main/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    function resize(jNode) {
        //console.log('jNode:', jNode);
        jNode.css("width", "40%");
    }
    waitForKeyElements(".clv3-table-header-items .clv3-table-header-cell:nth-child(2)", resize);
    waitForKeyElements(".clv3-table-row-item .clv3-table-cell:nth-child(2)", resize);
})();