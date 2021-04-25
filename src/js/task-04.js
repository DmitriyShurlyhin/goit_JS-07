
const counterValue = document.querySelector("#value");
const buttons = document.querySelectorAll("#counter button");
const btnDecrement = buttons[0];
const btnIncrement = buttons[1];
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);
let count = 0;

function decrement(event) {
    count -= 1;
  value.textContent = count;
}
function increment(event) {
    count += 1;
  value.textContent = count;
}