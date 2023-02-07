import { createStore } from "./redux.js";
import { asyncIncrease, decrease, increase, setCounter } from "./actions.js";
import reducer from "./reducer.js";
import { ASYNC_INCREASE_COUNTER, SET_COUNTER } from "./action-type.js";

const middleware1 = (store) => (next) => (action) => {
  console.log("mw1 =>", action);
  next(action);
};
const middleware2 = (store) => (next) => (action) => {
  console.log("mw2 =>", action);
  if (action.type === SET_COUNTER) {
    action.payload = 100;
  }
  next(action);
};
const middleware3 = (store) => (next) => (action) => {
  console.log("mw3 =>", action);
  if (action.type === ASYNC_INCREASE_COUNTER) {
    setTimeout(() => {
      next(increase());
    }, 1000);
  } else next(action);
};

const store = createStore(reducer, [middleware1, middleware2, middleware3]);

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
  store.dispatch(asyncIncrease({ url: "/async-increase" }));
});

btnDecrease.addEventListener("click", () => {
  store.dispatch(decrease());
});
