// defineProperties() method defines new or modifies existing properties directly on an object, returning the object.

// Example: 1

const properties = {};

Object.defineProperties(properties, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {
    writable: true
  }
});

properties.property2 = 29;

console.log(properties);