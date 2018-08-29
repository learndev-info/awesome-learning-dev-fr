// ==UserScript==
// @name         Remove bad sources
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Remove W3Schools and OpenClassrooms from Google, DuckDuckGo and Qwant results
// @author       Adrien Rault <adrien@rault.io>
// @match        https://www.google.com/search?*
// @match        https://www.qwant.com/*
// @match        https://duckduckgo.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const forbiddenSources = [
    'https://www.w3schools.com/',
    'https://openclassrooms.com/',
    'https://www.w3resource.com/'
  ]

  ;[...document.querySelectorAll('.g, .result')]
    .filter((el) => el.querySelectorAll(forbiddenSources.map((s) => `a[href^="${s}"]`).join(',')).length !== 0)
    .forEach((el) => el.remove())
})();