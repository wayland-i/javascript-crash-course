const BASE_API = 'http://localhost:3000/posts';
const JSON_API = 'http://localhost:3000/comments';
const POST_API = 'http://localhost:3000/profile';
const BROKEN_API = 'http://localhost:3000/broken';

// fetch(BASE_API).then(res => res.text()).then(console.log)

// fetch(BASE_API)
//     .then(res => res)
//     .then(console.log)
//     .catch(error => console.error('Oh No ' + error));

// async function main() {
//     try {
//         const response = await fetch(BASE_API);
//         console.log(response.status);
//         console.log(response.ok)
//         const text = await response.text();
//         console.log(text);
//     } catch (error) {
//         console.log('Oh No: ' + error)
//     }
// }
// main();

fetch(JSON_API).then(res => res.json()).then(console.log)