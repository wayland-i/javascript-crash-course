let globalNum = 5;

function logNum() {
    const localNum = 1;
    console.log(globalNum + localNum);
}

// globalNum = 10;
logNum();
console.log('hello')