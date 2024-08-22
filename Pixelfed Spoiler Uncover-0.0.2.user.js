// ==UserScript==
// @name         Pixelfed Spoiler Uncover
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  Automatically reveals spoiler content on Pixelfed by clicking the "See Post" button.
// @author       Alsweider
// Change URL to match your Pixelfed instance:
// @match        *://pixelfed.ru/*
// @grant        none
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/504635/Pixelfed%20Spoiler%20Uncover.user.js
// @updateURL https://update.greasyfork.org/scripts/504635/Pixelfed%20Spoiler%20Uncover.meta.js
// ==/UserScript==

(function() {
    'use strict';

    //Funktion zum Aufdecken des Spoilers durch Klicken des "See Post"-Buttons
    function uncoverSpoilers() {
        //Suche nach allen "See Post"-Buttons
        const buttons = document.querySelectorAll('button.btn-outline-light');

        //Gehe durch jeden Button und simuliere einen Klick
        buttons.forEach(button => {
            if (button && button.textContent.includes('See Post')) {
                button.click();
            }
        });
    }

    //Rufe die Funktion beim Laden der Seite auf
    window.addEventListener('load', uncoverSpoilers);

    //Event-Listener für dynamisch geladene Inhalte (z.B. beim Scrollen)
    const observer = new MutationObserver(uncoverSpoilers);
    observer.observe(document, { childList: true, subtree: true });

})();
