// const button = document.querySelector('button');

// button.addEventListener('click', onClick);

// function onClick() {
//     console.log('clicked!')
// }

// 'use strict';

// const logThis = () => {
//     console.log(this);
// }


// const button = document.querySelector('button');

// button.addEventListener('click', logThis);


// // console.log(this);



// const obj = {
//     num: 10,
//     logThis
// }

// obj.logThis();

// 'use strict';

// function logThis(x, y) {
//     console.log(this);
//     console.log(x, y)
// }

// const obj = {
//     num: 10,
// };

// const boundLogThis = logThis.bind(obj, 10);

// logThis.call(obj, 10, 20);

// logThis.apply(obj, [10, 20]);

// boundLogThis(30);

// 'use strict';

// [1, 2, 3].forEach(function(num) {
//     console.log(this);
//     console.log(num);
// }, { num: 10});

'use strict';

class Person {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log('Hello I am ' + this.name);
    }
}


const ian = new Person('Ian');
const clement = new Person('Clement');
ian.speak();
clement.speak();

