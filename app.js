import { ASYNC_INCREASE_COUNTER, SET_COUNTER } from "./action-type.js";
import { async_increase, decrease, increase, set_counter } from "./actions.js";
import { logger } from "./logger.js";
import reducer from "./reducer.js";
import { createStore } from "./redux.js";

const store = createStore(reducer, [logger]);

const counterDisplay = document.querySelector("#counter");
const btnIncrease = document.querySelector("#btn-increase");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnReset = document.querySelector("#btn-reset");

store.subscribe(function () {
  const { counter } = store.getState();

  counterDisplay.textContent = counter;
});

store.dispatch(set_counter(0));

btnIncrease.addEventListener("click", () => {
  store.dispatch(increase());
});
btnAsyncIncrease.addEventListener("click", () => {
  store.dispatch(async_increase());
});
btnDecrease.addEventListener("click", () => {
  store.dispatch(decrease());
});
btnReset.addEventListener("click", () => {
  store.dispatch(set_counter(0));
});
