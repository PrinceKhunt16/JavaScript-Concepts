const user = {
    name: 'Prince Khunt',
    age: 16,
    work: 'Software Developer'
};

for (const key in user) {
    console.log(key);
}

for (const key in user) {
    console.log(user[key]);
}