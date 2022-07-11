var fruit = "apple";

function appleTest() {
    var car = "mercedes";
    alert("Apple Test");
}

// qustion: "car" variable is global object or not?
// answer : No, it is only for "appleTest" function.

// qustion: What is use case of global object? 
// answer : Assume that the function of first page is to be used in the another page, then it can be used from a global object.

// qustion: How to make global object?
// answer : We can use "var" variable to create a global object.

// qustion: How many types of console?
// answer : "window.console" write in console. 

// qustion: Types of get Window Object in console?
// answer : Different browser in different type to get Window Object like "window", "this", "self", "globalThis". 

// qustion: Which type to write in any browser to get Window Object?
// answer : "global" is supported by all browser.