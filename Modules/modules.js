import algoExpert, { frontendExpert } from './helpers.js';
import Person from './Person.js';

frontendExpert();
algoExpert();

const conner = new Person('Conner');
conner.sayHello();

// const shouldSayFrontend = true;

// if (shouldSayFrontend) {
//     const importedObj = await import('/.helpers.js')
//     importedObj.frontendExpert();
// }