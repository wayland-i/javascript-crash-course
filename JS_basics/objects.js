const person = {
    name: 'Conner',
    course: 'FrontendExpert',
};

console.log(person);

console.log(JSON.parse(JSON.stringify(person)));

console.log(typeof JSON.stringify(person));


person.name = 'Clement';
console.log(person.name);

const map = new Map();