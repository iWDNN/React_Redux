import {
  ASYNC_INCREASE_COUNTER,
  INCREASE_COUNTER,
  SET_COUNTER,
} from "./action-type.js";
import {
  asyncRequest,
  asyncResponse,
  async_increase,
  decrease,
  increase,
  set_counter,
} from "./actions.js";
import { logger } from "./logger.js";
import reducer from "./reducer.js";
import { createStore } from "./redux.js";

const asyncRouter = (jobs) => (store) => (next) => (action) => {
  const matchJob = Object.entries(jobs).find(([type]) => action.type === type);

  if (matchJob) {
    matchJob[1](store, action);
  } else {
    next(action);
  }
};

const asyncJobs = {
  [ASYNC_INCREASE_COUNTER]: function (store) {
    store.dispatch(asyncRequest());
    setTimeout(() => {
      store.dispatch(increase(20));
      store.dispatch(asyncResponse());
    }, 3000);
  },
};

const store = createStore(reducer, [logger, asyncRouter(asyncJobs)]);

const counterDisplay = document.querySelector("#counter");
const loadingMessage = document.querySelector("#loading");
const btnIncrease = document.querySelector("#btn-increase");
const btnAsyncIncrease = document.querySelector("#btn-async-increase");
const btnDecrease = document.querySelector("#btn-decrease");
const btnReset = document.querySelector("#btn-reset");

store.subscribe(function () {
  const { counter, request } = store.getState();
  loadingMessage.style.visibility = request ? "visible" : "hidden";
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
