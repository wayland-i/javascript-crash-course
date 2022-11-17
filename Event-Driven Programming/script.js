const button = document.querySelector('button');

button.addEventListener('click', onClick);

document.body.addEventListener('click', onClick);

function onClick(event) {
    console.log(event.target);
    console.log(this)
    console.log('You clicked the button');
};