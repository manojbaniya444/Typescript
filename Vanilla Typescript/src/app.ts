import calculateSum from "./services/calculateSum";
import router from "./router/route";

const sum = calculateSum(1, 2);

const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", () => {
  alert(`The sum of 1 and 2 is ${sum}`);
});

// Listen for the hash change event (when the URL hash changes)
window.addEventListener("hashchange", router);
// Also run the router function when the page loads (to handle the initial route)
window.addEventListener("load", router);
