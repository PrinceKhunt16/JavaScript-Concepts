const user = {
    name: 'John',
    age: 58
}

const admin = {
    admin: true,
    ...user
}

console.log(admin);