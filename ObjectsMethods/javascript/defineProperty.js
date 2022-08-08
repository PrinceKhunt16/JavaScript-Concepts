// defineProperty() The static method Object. defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

// Example: 1

const ideas = {
    ideaNumber: 1,
    ideaOn: 'Technology',
    author: 'Prince Khunt'
}

/* 

Object.defineProperty(ideas, 'rating', {
    value: 4.9,
    writable: true
});

*/

Object.defineProperty(ideas, 'rating', {
    get: function () {
        return this.author;
    },
    set: function (author) {
        this.author = author
    }
});

ideas.rating = 4.95;
ideas.author = "author";

console.log(ideas);