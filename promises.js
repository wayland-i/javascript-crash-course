// state -> pending, fulfilled, rejected

// const promise = new Promise((resolve, reject) => {
//     // resolve(2);
//     // reject(2);
// });

// console.log(promise) 


const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
    // setTimeout(() => reject(new Error('Something went wrong')), 1000)
});

console.log(promise);

// promise.then(value => console.log(value), error => console.log('On no ' + error));

promise.then(console.log).catch(error => console.log('On No ' + error));