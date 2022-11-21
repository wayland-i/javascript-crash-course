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

localStorage.setItem('user', 'Ian');
localStorage.setItem('course', 'AlgoExpert');
console.log(localStorage.getItem('user'));
// localStorage.removeItem('user');
// localStorage.clear();
console.log(localStorage.getItem('user'));