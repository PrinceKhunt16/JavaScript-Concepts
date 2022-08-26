/*

set
delete
entries
forEach
get
has
keys
size
values
clear

*/

const map = new Map();

map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
map.set('d', 4);
map.set('e', 5);

map.delete('e');

console.log(map.size);

console.log(map.entries());

map.forEach((value, key) => {
    console.log(value, key);
});

for(const [key, value] of map){
    console.log(key, value);
}

console.log(map.get('d'));

console.log(map.has('d'));

console.log(map.keys());

console.log(map.values());

map.clear();

/*

set
has
delete
get

*/

const weekmap = new WeakMap();

{
    const ob = {
        name: 'titen'
    }

    weekmap.set(ob, 'ob');

    console.log(weekmap);
}

const up = {
    name: 'rado'
}

weekmap.set(up, 'up');

console.log(weekmap.has(up));

console.log(weekmap);

weekmap.delete(up);

console.log(weekmap);