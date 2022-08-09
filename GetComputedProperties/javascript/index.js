var p = document.getElementById("p");

// Read only do not Write
var allCssProp = window.getComputedStyle(p);

// DOM Properties
console.log(allCssProp.fontSize);

// .style with we cannot excess external CSS only get internal CSS 
var cs = p.style;

console.log(cs.color); // This is internal properties

// We can add any properties with .style method
cs.fontSize = "60px";

console.log(cs.fontSize); // This is not internal properties but we set by .style method