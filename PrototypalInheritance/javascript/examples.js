// 1

let aboutMe = {
    name: 'Prince',
    city: 'Surat',
    getIntro: function(){
        console.log(this.name + " from " + this.city);
    }
}

let aboutYou = {
    name: 'Prince'
}

aboutYou.__proto__ = aboutMe;

// 2

const obj = {
    name: 'john doe',
    getName: function(){
        return this.name
    },
    getProfession: function(){
        return this.profession
    }
}

console.log(obj);

const obj2 = {
    profession: 'SDE',
    name: 'john johnson',
    __proto__: obj
}

console.log(obj, obj2.getName(), obj2.getProfession(), obj.profession);

const obj3 = {
    name: 'john kyle',
    __proto__: obj2
}

console.log(obj3.name);

// 3

const object = new Object();
console.log(object);

const array = new Array();
console.log(array);

const number = new Number();
console.log(number);

const string = new String();
console.log(string);

// 4

Array.prototype.show = function(){
    return this;
}

const boys = ['john', 'maxi', 'joy', 'johnson', 'larry'];
console.log(boys.show());

Array.prototype.converIntoObject = function(){
    let newObj = {};
    
    this.forEach((element) => {
        newObj[element] = element;
    });

    return newObj;
}

console.log(boys.converIntoObject());

// 5

function MyPrototype(name){
    this.name = name;
}

MyPrototype.prototype.show = function(){
    return this.name;
}

const myproto = new MyPrototype("john doe");
console.log(myproto, myproto.show());