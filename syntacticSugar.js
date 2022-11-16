// const arr = [1, 2, 3, 4];

// const doubled = arr.map(num => num * 2);

// function double(num) {
//     return num * 2;
// };

// console.log(doubled)

// const arr = [1, 2, 3, 4];

// const [first, second, ...rest] = arr;

// const first = arr[0];
// const second = arr[1];

// console.log(first, second);
// console.log(rest)
// console.log(arr);


// const person = {
//     name: 'Conner',
//     website: 'FrontendExpert'
// };

// const { name: firstName, company='AlgoExpert', ...rest } = person;
// console.log(firstName);
// console.log(company);
// console.log(rest);

// function printName({name}) {
//     console.log(name);
// };

// printName(person);

// const arr = [1, 2, 3, 4];

// function add(x, y) {
//     console.log(x + y);
// };

// add(arr[0], arr[1]);

// add(...arr);

// console.log(...arr)

// const arr = [1, 2, 3, 4];
// const arr2 = [5, 6, 7];

// const combined = [0, ...arr, 4.5, ...arr2];
// console.log(combined);

// const arr = [1, 2, 3, 4];

// function logParams(x, ...rest) {
//     console.log(x);
//     console.log(rest);
// };

// logParams(1, 2, 3, 4);

// const name = 'Conner';
// const name  = undefined;

// const defaultName = name != null ? name : 'Default Name';

// const defaultName = name ?? 'Default Name'

// console.log('Hello ' + defaultName);
// //template literals use back ticks and ${}
// console.log(`Hello ${defaultName} ${1 + 3}`);


const person = {
    company: {
        website: 'AlgoExpert.io'
    }
};

console.log(person?.company?.website ?? 'Foo');