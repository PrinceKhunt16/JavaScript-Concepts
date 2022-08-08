// The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible. Every function includes prototype object by default. 

// Example: 1

function Obj(){
    this.name;
    this.sayHyy = function(){
        console.log(`${this.name} hyy`);
    }
}

Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(name){
    this.name = name;
}

let objPrototype = new Obj();