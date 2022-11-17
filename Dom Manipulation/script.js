// const listItems = document.querySelectorAll('li');

// listItems[0].style.backgroundColor = 'red';

// listItems[0].textContent = 'Changed!';

// // listItems[0].setAttribute('class', 'blue big');
// listItems[0].classList.add('blue');
// listItems[0].classList.toggle('big')
// listItems[0].classList.toggle('big')
// listItems[0].className = 'blue'


const listItems = document.querySelectorAll('li');

const p = document.createElement('p');
p.textContent = 'Hello World';

document.body.appendChild(p);

for (let i = 0; i < 3; i++) {
    const parent = document.querySelector('ol');
    const li = document.createElement('li');
    li.textContent = `List item with i=${i}`;
    parent.append(li)
}