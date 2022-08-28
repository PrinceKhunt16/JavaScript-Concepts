/*

1. Event Bubbling
2. Event Capturing
3. Stop Propogation
4. Immediadate Propogation
5. Prevent Default
6. Event Delegation

*/

// 1. Event Bubbling

/*

var topDiv = document.querySelector('.topDiv');
var midDiv = document.querySelector('.midDiv');
var insideDiv = document.querySelector('.insideDiv');

topDiv.addEventListener('click', () => {
    console.log('topDiv');
});

midDiv.addEventListener('click', () => {
    console.log('midDiv');
});

insideDiv.addEventListener('click', () => {
    console.log('insideDiv');
});

*/

// 2. Event Capturing

/*

var topDiv = document.querySelector('.topDiv');
var midDiv = document.querySelector('.midDiv');
var insideDiv = document.querySelector('.insideDiv');

*/

// 1

/*

topDiv.addEventListener('click', () => {
    console.log('topDiv');
}, true);

midDiv.addEventListener('click', () => {
    console.log('midDiv');
}, true);

insideDiv.addEventListener('click', () => {
    console.log('insideDiv');
}, true);

*/

// 2

/*

topDiv.addEventListener('click', () => {
    console.log('topDiv');
}, true);

midDiv.addEventListener('click', () => {
    console.log('midDiv');
}, false);

insideDiv.addEventListener('click', () => {
    console.log('insideDiv');
}, true);

*/

// 3. Stop Propogation

/*

var topDiv = document.querySelector('.topDiv');
var midDiv = document.querySelector('.midDiv');
var insideDiv = document.querySelector('.insideDiv');

topDiv.addEventListener('click', () => {
    console.log('topDiv');
});

midDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('midDiv');
});

insideDiv.addEventListener('click', () => {
    console.log('insideDiv');
});

*/

// 4. Immediadate Propogation

/*

var topDiv = document.querySelector('.topDiv');
var midDiv = document.querySelector('.midDiv');
var insideDiv = document.querySelector('.insideDiv');

topDiv.addEventListener('click', () => {
    console.log('topDiv');
});

midDiv.addEventListener('click', () => {
    console.log('midDiv');
});

insideDiv.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    console.log('insideDiv');
});

*/

// 5. Prevent Default

/*

var insideDiv = document.querySelector('.insideDiv');

insideDiv.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('insideDiv');
});

*/

// 6. Event Delegation

// 1

/*

document.querySelector('#category').addEventListener('click', (e) => {
    console.log(e.target.id);
    window.location.href = '/' + e.target.id;
});

*/

// 2

document.querySelector('#form').addEventListener('keyup', (e) => {
    console.log(e);

    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
});