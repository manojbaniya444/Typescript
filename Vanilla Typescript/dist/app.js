import calculateSum from "./services/calculateSum.js";
import router from "./router/route.js";
const sum = calculateSum(1, 2);
const button = document.querySelector("button");
button.addEventListener("click", () => {
    alert(`The sum of 1 and 2 is ${sum}`);
});
// Listen for the hash change event (when the URL hash changes)
window.addEventListener("hashchange", router);
// Also run the router function when the page loads (to handle the initial route)
window.addEventListener("load", router);
