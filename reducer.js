import {
  ASYNC_REQEUSET,
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
      return {
        ...state,
        counter: state.counter === undefined ? 1 : state.counter + 1,
      };

    case DECREASE_COUNTER:
      return {
        ...state,
        counter: state.counter === undefined ? 1 : state.counter - 1,
      };

    case ASYNC_REQEUSET:
      return { ...state, request: true };

    case ASYNC_RESPONSE:
      return { ...state, request: false };

    default:
      return { ...state };
  }
}
