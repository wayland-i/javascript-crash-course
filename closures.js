// let globalNum = 5;

// function logNum() {
//     const localNum = 1;
//     console.log(globalNum + localNum);
// }

// // globalNum = 10;
// logNum();
// console.log('hello')

// function example() {
//     const num = 5;

//     return function logNum() {
//         console.log(num)
//     }
// }

// const innerFunction = example();

// innerFunction();

// function makeFunctions() {
//     let privateNum = 0;

//     function privateIncrement() {
//         privateNum++;
//     }

//     return {
//         logNum: () => console.log(privateNum),
//         increment: () => {
//             privateIncrement();
//             console.log('Incremented!');
//         }
//     }
// }

for (var  i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 500);
}