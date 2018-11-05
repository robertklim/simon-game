let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn = false; // Computer flashing lights turn
let playerTurn = false; // Player try to match order
let intervalId;
let audioOn = true;
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

startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

function play() {
    // Reset variables
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    roundCounter.innerHTML = 1;
    good = true;
    playerTurn = false;
    compTurn = true;

    for (let i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);
    }

    intervalId = setInterval(gameTurn, 1000);
}

function gameTurn() {
    playerTurn = false; // To prevent player from clicking when computer is flashing
    
    if (flash === turn) {
        clearInterval(intervalId);
        compTurn = false;
        playerTurn = true;
        clearColor();
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] == 1) flashTopLeft();
            if (order[flash] == 2) flashTopRight();
            if (order[flash] == 3) flashBottomLeft();
            if (order[flash] == 4) flashBottomRight();
            flash++;
        }, 200);
    }
}

function flashTopLeft() {
    if (audioOn) {
        let audio = document.getElementById('clip1');
        audio.play();
    }
    audioOn = true;
    topLeft.style.backgroundColor = 'lightgreen';
}

function flashTopRight() {
    if (audioOn) {
        let audio = document.getElementById('clip2');
        audio.play();
    }
    audioOn = true;
    topRight.style.backgroundColor = 'red';
}

function flashBottomLeft() {
    if (audioOn) {
        let audio = document.getElementById('clip3');
        audio.play();
    }
    audioOn = true;
    bottomLeft.style.backgroundColor = 'yellow';
}

function flashBottomRight() {
    if (audioOn) {
        let audio = document.getElementById('clip4');
        audio.play();
    }
    audioOn = true;
    bottomRight.style.backgroundColor = 'lightskyblue';
}

function clearColor() {
    topLeft.style.backgroundColor = 'darkgreen';
    topRight.style.backgroundColor = 'darkred';
    bottomLeft.style.backgroundColor = 'goldenrod';
    bottomRight.style.backgroundColor = 'darkblue';
}

function flashColor() {
    topLeft.style.backgroundColor = 'lightgreen';
    topRight.style.backgroundColor = 'red';
    bottomLeft.style.backgroundColor = 'yellow';
    bottomRight.style.backgroundColor = 'lightskyblue';
}

// Player turn event listeners

topLeft.addEventListener('click', (event) => {
    if (playerTurn) {
        playerOrder.push(1);
        check();
        flashTopLeft();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

topRight.addEventListener('click', (event) => {
    if (playerTurn) {
        playerOrder.push(2);
        check();
        flashTopRight();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bottomLeft.addEventListener('click', (event) => {
    if (playerTurn) {
        playerOrder.push(3);
        check();
        flashBottomLeft();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

bottomRight.addEventListener('click', (event) => {
    if (playerTurn) {
        playerOrder.push(4);
        check();
        flashBottomRight();
        if (!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

function check() {
    console.log('check');
}