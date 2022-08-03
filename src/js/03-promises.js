// import Notiflix, { Notify } from 'notiflix';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form')
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

formEl.addEventListener("submit", onSubmitForm)

function onSubmitForm(eve) {
  eve.preventDefault();
  const firstStep = Number (delayEl.value);
  const step = Number (stepEl.value);
  const amount = Number (amountEl.value);
  let delay = firstStep;

  for (let position = 1; position <= amount; position += 1) {
    
    createPromise(position, delay)
      .then(({ position, delay }) => Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`))
      .catch(({ position, delay }) => Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`))
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise ((resolve, reject) => {
    
    setTimeout (() => {
      
  
  if (shouldResolve) {
    resolve({position, delay})
  } else {
    reject({position, delay});
  }
}, delay);
  });
};