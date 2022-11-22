// type NumString = number | string;
// let test: NumString = 123;
// test = '456';
// console.log(test);


// type State = 'off' | 'on';
// let test: State = 'off';
// test = 'on';
// console.log(test);


// enum State {
//     On = 'on',
//     Off = 'off'
// }

// let test: State = State.Off;
// test = State.On;
// console.log(test);

// function add(x: number, y: number): void {
//     console.log(x + y)
// }



interface Instructor {
    name: String;
    course: String;
    age?: number;
}


// const conner: Instructor = {
//     name: 'Conner',
//     course: 'FrontendExpert',
//     age: 24,
// };

// const clement: Instructor = {
//     name: 'Clement',
//     course: 'AlgoExpert'
// };


// class AlgoExpertInstructor implements Instructor {
//     name: String;
//     course: String;

//     constructor(name: string){
//         this.name = name;
//         this.course = 'AlgoExpert'
//     }
// }

// const tim = new AlgoExpertInstructor('Tim');

//generics

// const arr: Array<number> = [1, 2, 3];

interface GetterSetter<Key, Value> {
    set: (key: Key, value: Value) => void;
    get: (key: Key) => Value;
}

class StringNumGetterSetter implements GetterSetter<string, number> {
    map: Map<string, number> = new Map();

    set(key: string, value: number): void {
        this.map.set(key, value);
    }

    get(key: string): number {
        return this.map.get(key);
    }
}