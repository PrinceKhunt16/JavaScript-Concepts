const obj = {
    name: 'john',
    age: 25,
    getName: function(){
        return this.name;
    }
};

console.log(obj);

/*

Time Complexity

insert - O(1) 
remove - O(1) 
access - O(1) 
search - O(N)
keys - O(N)
values - O(N)
entries - O(N)
hasOwnProperty - O(N)

*/