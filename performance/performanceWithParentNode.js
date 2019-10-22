/**
 * performanceWithParentNode.js
 * dom-traversing-and-manipulation
 *
 * Created by Sıdıka Çay on 21.10.2019
 * Copyright © 2019 Sıdıka Çay. All rights reserved.
 */

"use strict";

const performance = new Performance();

function processWithHTMLTag() {
    performance.mark("DOM started");
    const list = document.getElementById("list1");
    const elem = document.createElement("div");

    list.innerHTML = "";
    for (let i = 0; i < 100000; i++) {
        let a = document.createElement("a");
        a.innerHTML = "link " + i;
        elem.appendChild(a);
    }
    list.appendChild(elem);
    performance.mark("DOM ended");
}

console.log("div used heap size: ",window.performance.memory.usedJSHeapSize);

console.log("Speed of parsing on DOM with parent node:");
processWithHTMLTag();
performance.measure("Speed", "DOM started", "DOM ended");
