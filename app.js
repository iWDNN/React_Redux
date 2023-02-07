import { decrease, increase, setCounter } from "./actions.js";
import { reducer } from "./reducer.js";
import { createStore } from "./redux.js";

const store = createStore(reducer);

const counterDisplay = document.querySelector("#counter");
const btnIncrease = document.querySelector("#btn-increase");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnReset = document.querySelector("#btn-reset");

store.subscribe(function () {
  const { counter } = store.getState();
  counterDisplay.textContent = counter;
});

store.dispatch(setCounter(0));

btnReset.addEventListener("click", () => {
  store.dispatch(setCounter(0));
});

btnIncrease.addEventListener("click", () => {
  store.dispatch(increase());
});

btnAsyncIncrease.addEventListener("click", () => {
  store.dispatch(increase());
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(decrease());
});
