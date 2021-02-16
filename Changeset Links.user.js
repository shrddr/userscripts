// ==UserScript==
// @name         Changeset Links
// @namespace    https://github.com/shrddr/userscripts
// @version      1.0
// @description  add achavi link to changeset page
// @author       shrddr
// @match        https://www.openstreetmap.org/*
// @grant        none
// @require      https://raw.githubusercontent.com/shrddr/userscripts/main/waitForKeyElements.js 
// ==/UserScript==

(function() {
    'use strict';

    function addLink(jNode) {
        let path = window.location.pathname;
        if (path.indexOf("/changeset/") === -1) return;
        let changeset = path.replace("/changeset/", "")
        //console.log('changeset:', changeset);

        jNode.append(' (<a href="https://overpass-api.de/achavi/?changeset='+changeset+'">achavi</a>)');
        //console.log('jNode:', jNode);
    }

    waitForKeyElements("#sidebar_content h2", addLink);
})();