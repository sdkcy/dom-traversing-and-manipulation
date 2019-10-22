/**
 * performance.js
 * dom-traversing-and-manipulation
 *
 * Created by Sıdıka Çay on 21.10.2019
 * Copyright © 2019 Sıdıka Çay. All rights reserved.
 */

"use strict";

function Performance() {
    this.marks = {};
}

Performance.prototype.mark = function (key) {
    this.marks[key] = Date.now();
};
Performance.prototype.measure = function (title, startKey, endKey) {
    const performance = Math.abs(this.marks[startKey] - this.marks[endKey]);
    console.log(title + "\n", performance);
};