const startEl = document.querySelector("[data-start]");
const stopEl = document.querySelector("[data-stop]");
const bodyEl = document.querySelector("body");

let bTnStatus = true;
let intervalId;

startEl.addEventListener('click', onStart)
stopEl.addEventListener('click', onStop)
startEl.disabled = false;

function onStart() {
    if (bTnStatus) {
        bTnStatus = false;
        startEl.disabled = true;
        intervalId = setInterval(() => {
            bodyEl.style.backgroundColor = `${getRandomHexColor()}`
        }, 1000);
    }
}

function onStop() {
    bTnStatus = true;
    startEl.disabled = false;
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
