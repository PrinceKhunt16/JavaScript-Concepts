/*

add
clear
delete
entries
forEach
has
keys
size
values

*/

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);

set.delete(4);

console.log(set.entries());

set.forEach((element) => {
    console.log(element);
});

console.log(set.has(2));

console.log(set.size);

for (const item of set) {
    console.log(item);
}

console.log(set.keys());

console.log(set.values());

set.clear();

const obj = {
    name: 'john',
    age: 25
}

set.add(obj);

for (const [key, value] of set.entries()) {
    console.log(key, value);
}

/*

add
has
delete

*/

const weekset = new WeakSet();

const ob = {
    name: 'titen'
}

weekset.add(ob);

console.log(weekset);

const up = {
    name: 'rado'
}

weekset.add(up);

console.log(weekset.has(ob));

console.log(weekset);

weekset.delete(up);

console.log(weekset);