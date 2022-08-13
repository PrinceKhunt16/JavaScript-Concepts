/* 

2. apply
4. assign
3. bind
1. call
15. create

5. freeze
6. isFrozen
7. seal
8. isSealed
9. preventExtensions
10. entries
11. keys
12. values
13. name
14. toString
16. is
17. isExtensible
18. getPrototypeOf
19. defineProperty
20. getOwnPropertyDescriptor
21. length
22. getOwnPropertyNames
23. fromEntries
24. prototype
25. defineProperties
26. setPrototypeOf
27. getOwnPropertySymbols
28. getOwnPropertyDescriptors

1. Parameters
    1. Object.defineProperty(obj, propName, {} )
    2. Object.defineProperties(obj, props)
    3. Object.getOwnPropertyNames(obj)
    4. Object.getOwnPropertyDescriptor(obj, prop)
    5. Object.getOwnPropertyDescriptors(obj)
    6. Object.keys(obj) - list of enumerable properties
    7. Object.values(obj) - list of enumerable prop values
    8. obj.propertyIsEnumerable(prop)
    9. obj.hasOwnProperty(prop)

2. Objects can be
    1. Extensible - new properties added
    2. Frozen - props cannot be changed in any way
    3. Sealed - props can't be deleted or configured but are still writable

3. Object Properties can be 
    1. Writable - change the value
    2. Enumerable - seen through a forin loop
    3. Configurable - change the property descriptors

4. Objects method
    1. Object.isExtensible(obj)
    2. Object.isFrozen(obj)
    3. Object.isSealed(obj)
    4. Object.preventExtensions(obj)
    5. Object.freeze(obj)
    6. Object.seal(obj)

5. Descriptors
    1. value         get
    2. writable      set
    3. configurable  configurable
    4. enumerable    enumerable

*/