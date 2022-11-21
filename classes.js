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
