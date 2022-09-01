// setPrototypeOf() method in JavaScript is standard built-in objects which sets the prototype (the internal [[Prototype]] property) of a specified object to another object or null.

// Example: 1

let toyoto = {
    drive(){
        return "Driving Toyoto";
    }
};

let camry = {
    wifi(){
        return "Using Wifi";
    }
};

console.log(camry);

Object.setPrototypeOf(camry, toyoto);