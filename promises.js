// state -> pending, fulfilled, rejected

// const promise = new Promise((resolve, reject) => {
//     // resolve(2);
//     // reject(2);
// });

// console.log(promise) 


// const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve(2), 1000);
//     setTimeout(() => reject(new Error('Something went wrong')), 1000)
// });


// console.log(promise);

// // promise.then(value => console.log(value), error => console.log('On no ' + error));

// promise.then(console.log).catch(error => console.log('On No ' + error));

// const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve(2), 1000);
//     setTimeout(() => reject(new Error('Something went wrong')), 1000)
// });

// const promise = Promise.resolve(3);

// console.log(promise);

// // promise.then(value => console.log(value), error => console.log('On no ' + error));

// // promise.then(console.log).catch(error => console.log('On No ' + error));

// promise
//     .then(value => value * 2)
//     .then(value => value + 1)
//     .then(value => {
//         throw new Error('Something went wrong');
//     })
//     .then(console.log)
//     .catch(error => {
//         console.log('Oh No ' + error);
//         // return 10;
//     })
//     .then(console.log)
//     .finally(() => console.log('done'))
        


// Promise.all([
//     Promise.resolve(3),
//     Promise.resolve(2),
//     new Promise((res, rej) => setTimeout(() => res(5), 1000))
// ]).then(console.log);


// Promise.race([
//     new Promise((res, rej) => setTimeout(() => res(10), 1000)),
//     new Promise((res, rej) => setTimeout(() => res(20), 2000)),
//     new Promise((res, rej) => setTimeout(() => res(5), 500))
// ]).then(console.log);

async function tester() {
    return 3;
}

console.log(tester());