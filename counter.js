let counter = 0;
let start_time = Date.now();

const increment = () => {
  counter++;
  document.querySelector(".counter-value").textContent = counter;
  let current_time = Date.now();
  let elapsed_time = current_time - start_time;
  document.querySelector(".stopwatch").textContent = elapsed_time;
};

const decrement = () => {
  counter--;
  document.querySelector(".counter-value").textContent = counter;
};

const reset = () => {
  counter = 0;
  start_time = Date.now();
  document.querySelector(".counter-value").textContent = counter;
  document.querySelector(".stopwatch").textContent = "";
};

document.querySelector("#increment").addEventListener("click", increment);
document.querySelector(".counter-value").addEventListener("click", increment);
document.querySelector("#decrement").addEventListener("click", decrement);
document.querySelector("#reset").addEventListener("click", reset);
