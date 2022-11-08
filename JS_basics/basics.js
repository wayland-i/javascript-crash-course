let str = 'abcd';

console.log(str === 'abcd');

console.log('Hello this is a single quote: \'');

console.log('Hello\nWorld');

console.log(`Hello
World`);

console.log(`Thirty: ${10 + 20}`);


console.log('This is a very ' +
            'long string');

console.log('this is a very \
long string')

str = 'abcd';

console.log(str.includes('a'));

console.log(str.endsWith('d'));

console.log(str.toUpperCase());


console.log(str.substring(0, 2));

console.log(str.slice(1, 3));

console.log(str.padStart(10, '-'));

console.log(str.trim()); //this comes in handy if 'str' had a bunch of spaces like '       abcd'

let ian = 'a,b,c,d';

console.log(ian.split(','));
