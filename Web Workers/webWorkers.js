const slowButton = document.getElementById('slow');
const sayHelloButton = document.getElementById('say-hello');

slowButton.addEventListener('click', slowOperation);
sayHelloButton.addEventListener('click', sayHello);

function slowOperation() {
    // const worker = new Worker('worker.js');
    
    for (let i = 0; i < 3000000000; i++) {
        1 + 2;
    }
    console.log('slow operation finished');
}

function sayHello() {
    console.log('hello world');
}