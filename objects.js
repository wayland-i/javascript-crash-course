// const myKey = 'key';
// const website = {
//     name: 'AlgoExpert',
//     rating: 5,
//     founders: ['Clement', 'Antoine'],
//     isAwesome: true,
//     'multi word key': 0,
//     [myKey]: 1234
// };

// console.log(website)


// const website = {
//     name: 'AlgoExpert',
//     rating: 5,
//     founders: ['Clement', 'Antoine'],
// };

// const key = 'name'

// console.log(website[key])


// const website = {
//     name: 'AlgoExpert',
//     rating: 5,
//     founders: ['Clement', 'Antoine'],
// };

// website.name = 'FrontendExpert';
// console.log(website.name)

// website.foo = 'bar';
// console.log(website)

// delete website.foo;
// console.log(website);

// const website = {
//     name: 'AlgoExpert',
//     rating: 5,
//     founders: ['Clement', 'Antoine'],
// };

// const name = 'Conner';
// const obj =  {
//     name,
// };


// console.log(obj);

// const website = {
//         name: 'AlgoExpert',
//         rating: 5,
//         founders: ['Clement', 'Antoine'],
// };
    
// const obj = new Object();
// obj.name = 'Conner';
// console.log(obj);

// const website = {
//         name: 'AlgoExpert',
//         rating: 5,
//         founders: ['Clement', 'Antoine'],
// };

// function Website(name, rating, founders) {
//     this.name = name;
//     this.rating = rating;
//     this.founders = founders;
// };

// const FrontendExpert = new Website('FrontendExpert', 5, ['Conner']);
// console.log(FrontendExpert);

// const website = {
//     name: 'AlgoExpert',
//     rating: 5,
//     founders: ['Clement', 'Antoine'],
// };

// const id = Symbol('id');
// const id2 = Symbol('id2');
// const id3 = Symbol.for('id3');
// const id4 = Symbol.for('id3');

// console.log(id3 === id4);


// console.log(id == id2)

// const obj = {
//     [id]: 1234,
//     [id2]: 0,
//     id: 'hello',
//     id: 'world'
// };

// console.log(obj)

// const website = {
//     name: undefined,
//     rating: 5,
//     founders: ['Clement', 'Antoine'],
// };

// console.log('name' in website);
// console.log(website.hasOwnProperty('name'));
// console.log(website.name !== undefined);

// const website = {
//     name: undefined,
//     rating: 5,
//     founders: ['Clement', 'Antoine'],
//     // sayHello: () => console.log('hello')
//     // sayHello: function() {console.log('hello')}
//     sayHello() {
//         console.log('hello');
//     },
//     get getRating() {
//         return this.rating * 2;
//     },
//     set setRating(value) {
//         this.rating = value;
//     }
// };

// website.sayHello();
// console.log(website.getRating);
// website.setRating = 6;
// console.log(website.getRating);

// const website = {
//     name: 'AlgoExpert',
//     rating: 5,
//     founders: ['Clement', 'Antoine'],
// };

// const obj = {
//     foo: 'bar',
//     [Symbol('id')]: 0,
//     __proto__: website
// };

// console.log(obj);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj))

// Object.entries(obj).forEach(function(value) {
//     console.log(value);
// });

// for (key in obj) {
//     console.log(key);
// };

// const myObj = {
//     original: 123,
// };

// Object.assign(myObj, obj);

// console.log(myObj);

// // Object.freeze(website);
// Object.seal(website);
// website.name = 'FrontendExpert';
// website.foo = 'bar';
// console.log(Object.isFrozen(website));
// console.log(website);

const website = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antoine'],
    [Symbol.toPrimitive](hint) {
        if (hint === 'number') {
            return 5;
        } else if (hint === 'string') {
            return 'hello';
        }
        return 2;
    }
};

// console.log(website.toString());
// website.toString = function() {
//     return 'Hello world';
// };
// console.log(website.toString());

console.log(website.valueOf());
website.valueOf = function() {
    return 2;
};


console.log(website - 1);

console.log(Number(website));

console.log(10 - website);
console.log(10 + website);