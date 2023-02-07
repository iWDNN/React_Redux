import {
  ASYNC_INCREASE_COUNTER,
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  SET_COUNTER,
} from "./action-type.js";
import { actionCreator } from "./redux.js";

export const increase = actionCreator(INCREASE_COUNTER);
export const asyncIncrease = actionCreator(ASYNC_INCREASE_COUNTER);
export const decrease = actionCreator(DECREASE_COUNTER);
export const setCounter = actionCreator(SET_COUNTER);
