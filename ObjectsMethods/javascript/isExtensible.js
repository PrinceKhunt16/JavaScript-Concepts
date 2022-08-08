// Objects are extensible by default they can have new properties added to them, and their [[Prototype]] can be re-assigned. An object can be marked as non-extensible using one of Object.preventExtensions(), Object.seal(), Object.freeze()

// Example: 1

const extensible = {
    action: "Running"
}

console.log(Object.isExtensible(extensible));