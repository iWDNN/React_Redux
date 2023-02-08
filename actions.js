import {
  ASYNC_INCREASE_COUNTER,
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  SET_COUNTER,
} from "./action-type.js";
import { actionCreator } from "./redux.js";

export const set_counter = actionCreator(SET_COUNTER);
export const increase = actionCreator(INCREASE_COUNTER);
export const async_increase = actionCreator(ASYNC_INCREASE_COUNTER);
export const decrease = actionCreator(DECREASE_COUNTER);
