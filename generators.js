// function* genNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
//     return 4;
// }

// const generator = genNumbers();


// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

function* genNumbers(count) {
    for (let i=0; i < count; i++) {
        yield i;
    }
}

const generator = genNumbers(3);


console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
