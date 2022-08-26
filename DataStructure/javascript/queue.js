class ArrayQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }

        return null;
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

const arrQueue = new ArrayQueue();

console.log(arrQueue.isEmpty());

arrQueue.enqueue(10);
arrQueue.enqueue(20);
arrQueue.enqueue(30);

console.log(arrQueue.size());

arrQueue.print();

console.log(arrQueue.dequeue());
console.log(arrQueue.peek());

arrQueue.print();

class ObjectQueue{
    constructor(){
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(key, value){
        this.items[key] = value;
        this.rear++;
    }

    dequeue(){
        let key;

        for (const item in this.items) {
            key = item;
            break;
        }

        let returnVal = this.items[key];

        delete this.items[key];
        this.front++;

        return returnVal;
    }

    peek(){
        let key;

        for (const item in this.items) {
            key = item;
            break;
        }
        
        let returnVal = this.items[key];
        
        return returnVal;
    }

    size(){
        return this.rear - this.front;
    }

    isEmpty(){
        return this.rear - this.front === 0;
    }

    print(){
        console.log(this.items);
    }
}

const objQueue = new ObjectQueue();

console.log(objQueue.isEmpty());

objQueue.enqueue('f', 10);
objQueue.enqueue('s', 20);
objQueue.enqueue('t', 30);

console.log(objQueue.size());

objQueue.print();

console.log(objQueue.dequeue());

console.log(objQueue.peek());

console.log(objQueue.isEmpty());

objQueue.print();