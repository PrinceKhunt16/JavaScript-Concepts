// The Object.preventExtensions() method in JavaScript is standard built-in objects which prevents new properties from ever being added to an object.

// Example: 1

const movie = {
    name: "RRR",
    details: {
        director: "Raja Mouli"
    }
};

movie.song = "Nacho Nacho";

Object.preventExtensions(movie);

// Not add any property
movie.time = "180min";

// Delete any available property
delete movie.song;

console.log(movie);