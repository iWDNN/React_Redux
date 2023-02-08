import {
  ASYNC_INCREASE_COUNTER,
  ASYNC_REQUEST,
  ASYNC_RESPONSE,
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  SET_COUNTER,
} from "./action-type.js";
import { actionCreator } from "./redux.js";

export const set_counter = actionCreator(SET_COUNTER);
export const increase = actionCreator(INCREASE_COUNTER);
export const async_increase = actionCreator(ASYNC_INCREASE_COUNTER);
export const decrease = actionCreator(DECREASE_COUNTER);
export const asyncRequest = actionCreator(ASYNC_REQUEST);
export const asyncResponse = actionCreator(ASYNC_RESPONSE);
