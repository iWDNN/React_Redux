import {
  ASYNC_REQUEST,
  ASYNC_RESPONSE,
  DECREASE_COUNTER,
  INCREASE_COUNTER,
  SET_COUNTER,
} from "./action-type.js";

const InitializeState = {
  message: "app store",
  request: false,
};

export default function reducer(state = InitializeState, action) {
  switch (action.type) {
    case SET_COUNTER:
      return { ...state, counter: action.payload };
    case INCREASE_COUNTER:
      if (action.payload) {
        return { ...state, counter: state.counter + action.payload };
      } else
        return {
          ...state,
          counter: state.counter === undefined ? 1 : state.counter + 1,
        };
    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter === undefined ? 0 : state.counter - 1,
      };
    case ASYNC_REQUEST:
      return { ...state, request: true };
    case ASYNC_RESPONSE:
      return { ...state, request: false };
    default:
      return { ...state };
  }
}
