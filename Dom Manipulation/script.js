// const listItems = document.querySelectorAll('li');

// listItems[0].style.backgroundColor = 'red';

// listItems[0].textContent = 'Changed!';

// // listItems[0].setAttribute('class', 'blue big');
// listItems[0].classList.add('blue');
// listItems[0].classList.toggle('big')
// listItems[0].classList.toggle('big')
// listItems[0].className = 'blue'


// const listItems = document.querySelectorAll('li');

// const p = document.createElement('p');
// p.textContent = 'Hello World';

// document.body.appendChild(p);

// for (let i = 0; i < 3; i++) {
//     const parent = document.querySelector('ol');
//     const li = document.createElement('li');
//     li.textContent = `List item with i=${i}`;
//     parent.append(li);
// }

// listItems[0].remove()

const listItems = document.querySelectorAll('li');

const scrollable = document.getElementById('scrollable');

console.log(scrollable.clientHeight);
console.log(scrollable.offsetHeight);
console.log(scrollable.scrollHeight);
console.log(scrollable.offsetTop);

console.log(window.getComputedStyle(listItems[0]).fontSize);

// console.log(listItems[0].style.fontSize);

console.log(scrollable.querySelectorAll('p')[0].offsetTop);

scrollable.querySelectorAll('p')[6].scrollIntoView();

scrollable.scrollTo({
    top: scrollable.querySelectorAll('p')[2].offsetTop,
    behavior: 'smooth'
});