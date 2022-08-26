class ArrayStack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const arrStack = new ArrayStack();

console.log(arrStack.isEmpty());

arrStack.push(20);
arrStack.push(10);
arrStack.push(30);

console.log(arrStack.size());

arrStack.print();

console.log(arrStack.pop());
console.log(arrStack.peek());

arrStack.print();

class ObjectStack{
    constructor(){
        this.items = {};
        this.head = 0;
    }

    push(key, value){
        this.items[key] = value;
        this.head++;
    }

    pop(){
        let key;

        for (const item in this.items) {
            key = item;
        }

        let returnVal = this.items[key];

        delete this.items[key];
        this.head--;

        return returnVal;
    }

    peek(){
        let key;

        for (const item in this.items) {
            key = item;
        }
        
        return this.items[key];
    }

    size(){
        return this.head;
    }

    isEmpty(){
        return this.head === 0;
    }

    print(){
        console.log(this.items);
    }
}

const objStack = new ObjectStack();

objStack.push('name', 'john doe');
objStack.push('profession', 'SDE');
objStack.push('age', 20);

objStack.print();

console.log(objStack.size());

console.log(objStack.isEmpty());

console.log(objStack.peek());

console.log(objStack.pop());