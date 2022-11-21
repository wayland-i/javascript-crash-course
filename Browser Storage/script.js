// document.cookie = `user=Clement; secure; samesite=strict`;
// document.cookie = 'course=FrontendExpert';
// console.log(document.cookie);

// const course = document
//     .cookie
//     .split('; ')
//     .find(cookie => cookie.startsWith('course='))
//     .split('=')[1];

// console.log(course)

//the web storage API => local storage and session storage

//session storage expires, local storage has to be deleted manually

// localStorage.setItem('user', 'Ian');
// localStorage.setItem('course', 'AlgoExpert');
// console.log(localStorage.getItem('user'));
// // localStorage.removeItem('user');
// // localStorage.clear();
// console.log(localStorage.getItem('user'));


const request = indexedDB.open('myDatabase', 1);

request.addEventListener('upgradeneeded', event => {
    const database = event.target.result;
    const store = database.createObjectStore('users', {keyPath: 'id'});
    store.createIndex('name', 'name');

    store.add({
        id: 0,
        name: 'Conner',
        course: 'FrontendExpert'
    });
    store.add({
        id: 1,
        name: 'Clement',
        course: 'AlgoExpert'
    });
})
