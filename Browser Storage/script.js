// document.cookie = `user=Clement; secure; samesite=strict`;
// document.cookie = 'course=FrontendExpert';
// console.log(document.cookie);

const course = document
    .cookie
    .split('; ')
    .find(cookie => cookie.startsWith('course='))
    .split('=')[1];

console.log(course)