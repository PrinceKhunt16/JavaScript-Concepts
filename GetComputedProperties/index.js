var p = document.getElementById("p");

// Read Only Do not Write
var allCssProp = window.getComputedStyle(p);

// DOM Properties
console.log(allCssProp.fontSize);

// .style with we cannot excess external CSS only get internal CSS
var cs = p.style;
console.log(cs.color); // This is internal propertie
console.log(cs.fontSize); // This is external propertie

// But we write anything properties with .style method
cs.fontSize = "60px";