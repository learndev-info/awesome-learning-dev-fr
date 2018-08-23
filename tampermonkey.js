// ==UserScript==
// @name         Remove bad sources
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Remove W3Schools and OpenClassrooms from google results
// @author       Adrien Rault <adrien@rault.io>
// @match        https://www.google.com/search?*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const forbiddenSources = [
    'https://www.w3schools.com/',
    'https://openclassrooms.com/'
  ]

  ;[...document.querySelectorAll('.g')]
    .filter((el) => el.querySelectorAll(forbiddenSources.map((s) => `a[href^="${s}"]`).join(',')).length !== 0)
    .forEach((el) => el.remove())
})();