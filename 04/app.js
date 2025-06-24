let idInterval;
let counter = 0;
let idCounter;

function showTime() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
}

const showCounter = function () {
    counter++;

    if (counter >= 5) {
        clearInterval(idInterval);
    }
}

idInterval = setInterval(showTime, 5000);
idCounter = setInterval(showCounter, 5000);
