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

const promise = Promise.resolve(3);

console.log(promise);

// promise.then(value => console.log(value), error => console.log('On no ' + error));

// promise.then(console.log).catch(error => console.log('On No ' + error));

promise
    .then(value => value * 2)
    .then(value => value + 1)
    .then(value => {
        throw new Error('Something went wrong');
    })
    .then(console.log)
    .catch(error => {
        console.log('Oh No ' + error);
        // return 10;
    })
    .then(console.log);
        