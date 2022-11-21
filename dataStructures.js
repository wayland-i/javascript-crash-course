// const stack = [];

// stack.push(1);
// stack.push(2);

// console.log(stack.pop());

// const queue = [];
// queue.push(1);
// queue.push(2);
// console.log(queue.shift());

// const map = new Map();

// map.set('test', 123);
// map.set(10, 'ten');
// // map.delete(10)
// // map.clear()


// console.log(map.get(10));
// console.log(map.has(10));
// console.log(map.has('ten'));
// console.log(map.size);


// const map = new Map();

// map.set('test', 123);
// map.set(10, 'ten');

// for ([key, value] of map) {
//     console.log(key, value);
// }

// map.forEach((value, key) => {
//     console.log(key, value);
// }) 

// const set = new Set();
// set.add(123);
// set.add(456);

// for (value of set) {
//     console.log(value);
// }

// set.forEach(value => {
//     console.log(value);
// })

// const arr =  [1, 2, 2, 3, 4];
// console.log(Array.from(new Set(arr)));

// const weakSet = new WeakSet();

// (function() {
//     const obj = {};
//     weakSet.add(obj);
// })();


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addStart(value) {
        const node = new Node(value);
        const tempHead = this.head;
        this.head = node;
        node.next = tempHead;
    }

    addEnd(value) {
        const node = new Node(value);
        let curr = this.head;

        if (curr == null) {
            this.head = node;
            return;
        }

        while (curr != null && curr.next != null) {
            curr = curr.next;
        }
        curr.next = node;
    }
}

const list = new LinkedList();
list.addStart(1);
list.addStart(2);
list.addEnd(3);
console.log(list.head.next.next.value)