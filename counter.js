let counter = 0;

const increment = () => {
  counter++;
  document.querySelector(".counter-value").textContent = counter;
};

const decrement = () => {
  counter--;
  document.querySelector(".counter-value").textContent = counter;
};

const reset = () => {
  counter = 0;
  document.querySelector(".counter-value").textContent = counter;
};



document.querySelector("#increment").addEventListener("click", increment);
document.querySelector(".counter-value").addEventListener("click", increment);
document.querySelector("#decrement").addEventListener("click", decrement);
document.querySelector("#reset").addEventListener("click", reset);
