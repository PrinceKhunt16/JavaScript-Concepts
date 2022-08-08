// The delete operator removes a given property from an object. On successful deletion, it will return true, else false will be returned. However, it is important to consider the following scenarios Like If the property which you are trying to delete does not exist, delete will not have any effect and will return true.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete

const fan = (function(a) {
    delete a;
    return a;
})(5);

console.log(fan);