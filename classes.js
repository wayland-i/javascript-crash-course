// const person = {
//     isHuman: true
// };

// // const child = Object.assign(Object.create(person), {
// //     maxAge: 18
// // });

// const child = {
//     maxAge: 18,
//     __proto__: person
// };

// console.log(person.maxAge);
// console.log(child.maxAge);

// const person = { 
//     isHuman: true
// };

// const child = Object.create(person);
// child.maxAge = 18;

// const john = Object.create(child);
// john.name = 'John';

// child.maxAge = 19;

// console.log(john.maxAge);

// const arrayProto = Object.getPrototypeOf([]);
// console.log(Object.getOwnPropertyNames(arrayProto));

function Person(name) {
    this.name = name
}

Person.prototype = {
    constructor: Person,
    isHuman: true
};

const conner = new Person('Conner');
const ian = new Person('Ian');
console.log(conner);
console.log(ian);


Person.prototype.speak = function() {
    console.log("hello this is " + this.name);
}

ian.speak();

console.log(conner instanceof Person);
console.log(ian instanceof Object);

