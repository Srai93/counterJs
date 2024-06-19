let counter = 0;

let output = document.querySelector(".output");
let incrementElement = document.querySelector(".increase_btn");
let decrementElement = document.querySelector(".decrease_btn");
let resetElement = document.querySelector(".reset_btn");

output.innerHTML = counter;

function increment() {
  counter++;
  if (counter > 0) {
    output.style.color = "#209920";
  }
  if (counter === 0) {
    output.style.color = "#000";
  }
  output.innerHTML = counter;
  console.log(counter);
}

function decrement() {
  counter--;
  if (counter < 0) {
    output.style.color = "#c21e56";
  }
  if (counter === 0) {
    output.style.color = "#000";
  }
  output.innerHTML = counter;
}

function reset() {
  counter = 0;
  if (counter === 0) {
    output.style.color = "#000";
  }
  output.innerHTML = counter;
}

incrementElement.addEventListener("click", increment);
decrementElement.addEventListener("click", decrement);
resetElement.addEventListener("click", reset);
