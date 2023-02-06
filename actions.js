import * as ActionType from "./action-type.js";
import { actionCreator } from "./redux.js";

export const increase = actionCreator(ActionType.INCREASE);
export const decrease = actionCreator(ActionType.DECREASE);
export const reset = actionCreator(ActionType.RESET);
