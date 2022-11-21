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

// function Person(name) {
//     this.name = name
// }

// Person.prototype = {
//     constructor: Person,
//     isHuman: true
// };

// const conner = new Person('Conner');
// const ian = new Person('Ian');
// console.log(conner);
// console.log(ian);


// Person.prototype.speak = function() {
//     console.log("hello this is " + this.name);
// }

// ian.speak();

// console.log(conner instanceof Person);
// console.log(ian instanceof Object);


// This is a Polyfill

// Array.prototype.myPush = function(value) {
//     this[this.length] = value;
// }

// const arr = [1, 2, 3];
// arr.myPush(4);
// console.log(arr);

// class Person {
//     static isHuman = true;
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log('Hello this is ' + this.name);
//     }
//     static greet() {
//         console.log('hello');
//     }
// }

// const conner = new Person('Conner');
// const clement = new Person('Clement');
// conner.speak();
// // conner.isHuman = false;
// console.log(conner.isHuman);
// console.log(clement.isHuman);
// console.log(Person.isHuman);

class Person {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log('Hello this is ' + this.name);
    }
}

