function* genNumbers() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

const generator = genNumbers();


console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());