import {
  ASYNC_INCREASE_COUNTER,
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  SET_COUNTER,
} from "./action-type.js";

const InitializeState = {
  message: "app store",
};

export function reducer(state = InitializeState, action) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        counter: state.counter === undefined ? 1 : state.counter + 1,
      };
    case ASYNC_INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter === undefined ? 0 : state.counter - 1,
      };
    case SET_COUNTER:
      return { ...state, counter: action.payload };
    default:
      return { ...state };
  }
}
