const btnDecr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('span#value')

let counterValue = 0;

function increment() {
    counterValue += 1;
    return counter.textContent = counterValue;
};
function decrement() {
    counterValue -=1;
    return counter.textContent = counterValue;
};

btnIncr.addEventListener('click', increment)
btnDecr.addEventListener('click', decrement);

