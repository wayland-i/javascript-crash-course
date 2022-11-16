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


const person = {
    name: 'Conner',
    website: 'FrontendExpert'
};

// const { name: firstName, company='AlgoExpert', ...rest } = person;
// console.log(firstName);
// console.log(company);
// console.log(rest);

function printName({name}) {
    console.log(name);
};

printName(person);