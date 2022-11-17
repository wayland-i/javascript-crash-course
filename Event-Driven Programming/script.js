// const button = document.querySelector('button');

// const abortController = new AbortController();

// button.addEventListener('click', onClick, {
//     capture: true,
//     once: true,
//     passive: true,
//     signal: abortController.signal
// });

// abortController.abort();

// document.body.addEventListener('click', onClick, true);

// // button.removeEventListener('click', onClick);

// button.addEventListener('dblclick', onClick);
// // 'mousedown', 'mouseup'

// function onClick(event) {
//     // event.preventDefault();
//     console.log(event.target);
//     console.log(this)
//     console.log('You clicked the button');
// };

// window.addEventListener('keydown', event => {
//     console.log(event.code);
// });

// //keyup

// const scrollable = document.getElementById('scrollable');

// scrollable.addEventListener('mousemove', e => {
//     // console.log(e.target.scrollTop);
//     console.log(e.pageX, e.pageY);
// });

const scrollable = document.getElementById('scrollable');
const button = document.querySelector('button');

button.addEventListener('dragstart', e => {
    console.log(e);
});

scrollable.addEventListener('drop', e => {
    scrollable.prepend(button);
});

scrollable.addEventListener('dragover', e => {
    e.preventDefault();
})

button.addEventListener('click', onClick);

function onClick() {
    console.log('hello');
};
