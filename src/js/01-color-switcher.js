const startEl = document.querySelector("[data-start]");
const stopEl = document.querySelector("[data-stop]");
const bodyEl = document.querySelector("body");

let bTnStatus = true;
let intervalId;

startEl.addEventListener('click', onStart)
stopEl.addEventListener('click', onStop)

function onStart() {
    if (bTnStatus) {
        bTnStatus = false;
        intervalId = setInterval(() => {
            bodyEl.style.backgroundColor = `${getRandomHexColor()}`
        }, 1000);
    }
}

function onStop() {
    bTnStatus = true;
    clearInterval(intervalId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
