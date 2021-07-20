const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const decrementBtnAction = decrementBtn.dataset.action;
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const incrementBtnAction = incrementBtn.dataset.action;
const valueEl = document.querySelector('#value');

console.log(decrementBtnAction);
console.log(incrementBtnAction)
decrementBtn.addEventListener('click', function () {
    
    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    

    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});

console.log(window);