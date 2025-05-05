const addButtonElement = document.getElementById("counterAdd");
const subButtonElement = document.getElementById("counterSub");
const counterDisplayElement = document.getElementById("counterDisplay");

let total = 0;
const limit = 20;

const updateCounterDisplay = () => {
    if (total > limit) {
        total = limit;
    }
    else if (total < 0) {
        total = 0
    }
    counterDisplayElement.textContent = total;
}

addButtonElement.addEventListener('click', () => {
    total += 1;
    updateCounterDisplay();
});

subButtonElement.addEventListener('click', () => {
    total -= 1;
    updateCounterDisplay();
});