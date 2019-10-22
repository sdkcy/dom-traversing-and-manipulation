/**
 * performanceWithDocumentFragment.js
 * dom-traversing-and-manipulation
 *
 * Created by Sıdıka Çay on 21.10.2019
 * Copyright © 2019 Sıdıka Çay. All rights reserved.
 */

"use strict";

const performance = new Performance();

function processWithHDocumentFragment() {
    performance.mark("DOCFrag started");

    const list = document.getElementById("list2");
    const elem = document.createDocumentFragment();

    list.innerHTML = "";
    for (let i = 0; i < 100000; i++) {
        let a = document.createElement("a");
        a.innerHTML = "link " + i;
        elem.appendChild(a);
    }
    list.appendChild(elem);
    performance.mark("DOCFrag ended");
}

console.log("DocumentFragment used heap size: ",window.performance.memory.usedJSHeapSize);

console.log("Speed of parsing on DOM without parent node:");
processWithHDocumentFragment();
performance.measure("Speed", "DOCFrag started", "DOCFrag ended");