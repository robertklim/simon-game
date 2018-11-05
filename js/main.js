let order = [];
let playerOrder = [];
let turn;
let strict = false;
let on = false;
let win;

const roundCounter = document.querySelector('#round-text');
const topLeft = document.querySelector('#topleft');
const topRight = document.querySelector('#topright');
const bottomLeft = document.querySelector('#bottomleft');
const bottomRight = document.querySelector('#bottomright');
const strictButton = document.querySelector('#strict');
const onButton = document.querySelector('#on');
const startButton = document.querySelector('#start');

strictButton.addEventListener('change', (event) => {
    if (strictButton.checked === true) {
        strict = true;
    } else {
        strict = false;
    }
});

onButton.addEventListener('change', (event) => {
    if (onButton.checked === true) {
        on = true;
        roundCounter.innerHTML = '0';
    } else {
        on = false;
        roundCounter.innerHTML = '';
    }
});