// 1

/*

function createCounter(){
    return {
        count: 0,
        increment: function(){
            this.count++;
            console.log(this);
        }
    }
}

let one = createCounter();
let two = createCounter();

one.increment();
two.increment();
two.increment();

console.log(one, two);

*/

// 2

/*

var count = 0;
function incrementCounter(){
    this.count++;
    console.log(this);
}

incrementCounter();
incrementCounter();
incrementCounter();

console.log(count);

*/

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this, tag);
        }, this);
    }
};

video.showTags();