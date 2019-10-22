/**
 * index.js.js
 * dom-traversing-and-manipulation
 *
 * Created by Sıdıka Çay on 22.10.2019
 * Copyright © 2019 Sıdıka Çay. All rights reserved.
 */

"use strict";

const parent = document.querySelector("#shape");
let selectedNode = null;

function appendNewChild() {
    const newChild = document.querySelector("#newChild");
    let value = newChild.value;
    if (!value) {
        return;
    }
    value = nameConverter(value);

    const newShape = document.createElement("li");
    const newShapeTextNode = document.createTextNode(value);
    newShape.appendChild(newShapeTextNode);
    parent.appendChild(newShape);
    newChild.value = "";
}

function selectShape(event) {
    if (event.target === parent) {
        return;
    }

    if (selectedNode && selectedNode !== event.target) {
        selectedNode.dataset.clicked = "false";
        selectedNode.style.color = "dimgrey";
    }
    if (selectedNode === event.target) {
        selectedNode.style.color = selectedNode.style.color === "dimgrey" ? "lightcoral" : "dimgrey";
    } else {
        selectedNode = event.target;
        selectedNode.style.color = "lightcoral";
        selectedNode.dataset.clicked = selectedNode.dataset.clicked === "true" ? "false" : "true";
    }
}

function deleteShape() {
    if (selectedNode === parent || !selectedNode) {
        return;
    }
    parent.removeChild(selectedNode);
    if (parent.childElementCount < 1) {
        selectedNode = null;
    }

}

function changeShape() {
    if (selectedNode === parent || !selectedNode) {
        return;
    }
    let value = document.getElementById("replaceChild").value;
    value = nameConverter(value);
    deleteShape(selectedNode);
    const child = document.createElement("li");
    child.appendChild(document.createTextNode(value));
    parent.appendChild(child);
    selectedNode = null;
}

function nameConverter(value) {
    value = value.replace(/[^a-zA-Z]/g, "");
    value = value[0].toUpperCase() + value.substr(1);
    return value;
}
