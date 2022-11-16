// const arr = [1, 2, 3];

// const arr = new Array(5).fill(0);

// const arr = new Array();
// arr.length = 10;
// arr.fill(0);

// console.log(arr)


// const arr = [1, 2, 3, 3];

// arr[1] = 10;

// console.log(arr.includes(3));
// console.log(arr. indexOf(3));
// console.log(arr.lastIndexOf(3));
// console.log(arr);

/*

            break

*/


// const arr = [1, 2, 3];

// arr.push(4);
// arr.pop();
// arr.pop();

// arr.push(4, 5, 6);

// arr.unshift(4, 5, 6);

// console.log(arr.shift());

// console.log(typeof arr);

// console.log(Array.isArray(arr));
// console.log(arr instanceof Array);

// console.log(arr);

////break///////

// const arr = [1, 2, 3];

// arr.splice(0, 1);
// arr.splice(0, 2, 'hello', 'world');

// const newArr = arr.slice(1, 3);

// console.log(newArr);

// const newArr = arr.concat(['hello', 'world']);

// console.log(newArr);

///break///

// const arr = [1, 2, 3];

// arr.reverse();

// console.log(arr.join(' | '));

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let i = 0;

// for (const value of arr) {
//     console.log('value:', value, 'index:', i);
//     i++;
// }


// const arr = [1, 2, 3];

// arr.forEach(function(value, index) {
//     console.log(value, index, this);
// }, {num : 10});

// const mappedArray = arr.map(function(value, index) {
//     return value + index + this.num;
// }, {num : 10});

// console.log(mappedArray)


// const arr = [1, 2, 3];

// const mappedArray = arr.filter(function(value) {
//     return value > this.num;
// }, {num : 1});

// const foundValue = arr.find(function(value) {
//     return value > 1;
// }) 

// console.log(foundValue)


// .every, .some also work as you would assume

// const arr = [1, 2, 3];

// const sum = arr.reduce(function(accumulator, currValue) {
//     return accumulator + currValue;
// }, 0);

// console.log(arr);
// console.log(sum);


const arr = [5, 7, 3, 0];

arr.sort(compareNumbers);

function compareNumbers(firstNumber, secondNumber) {
    // return secondNumber - firstNumber;    
    if (firstNumber === 3) {
        return -1;
    }
    if (secondNumber === 3) {
        return 1;
    }
    return firstNumber - secondNumber;
}



console.log(arr);