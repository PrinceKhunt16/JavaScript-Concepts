let user = {
    name: 'Shiva',
    age: 30,
    education: {
        primary: 'The Hotchkiss School',
        secondary: 'Massachusetts Institute of Technology'
    }
};

const {education: {primary}} = user;

console.log(primary);