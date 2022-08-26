/*

1. Event Bubbling
2. Event Capturing
3. Stop Propogation
4. Immediadate Propogation
5. Prevent Default

*/

// 1. Event Bubbling

/*

var div = document.querySelector('div');
var button = document.querySelector('button');

div.addEventListener('click', () => {
    console.log('div');
});

button.addEventListener('click', () => {
    console.log('button');
});

*/

// 2. Event Capturing

/*

var div = document.querySelector('div');
var button = document.querySelector('button');

div.addEventListener('click', () => {
    console.log('div');
}, true);

button.addEventListener('click', () => {
    console.log('button');
}, true);

*/

// 3. Stop Propogation

/*

var div = document.querySelector('div');
var button = document.querySelector('button');

div.addEventListener('click', () => {
    console.log('div');
});

button.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('button');
});

*/

// 4. Immediadate Propogation

/*

var button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    console.log('button with stopPropagation');
});

button.addEventListener('click', () => {
    console.log('button without stopPropagation');
});

*/

// 5. Prevent Default

var button = document.querySelector('button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('button');
});