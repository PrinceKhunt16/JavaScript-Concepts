/*

What is Laxical Scope ?
A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true. The variables defined inside a function will not be accessible outside that function.

What is Scope Chain ?
Whenever our code tries to access a variable during the function call, it starts the searching from local variables. And if the variable is not found, it'll continue searching in its outer scope or parent functions' scope until it reaches the global scope and completes searching for the variable there.

*/