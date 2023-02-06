// 일반적인 앱은 상태 변경과 관련된 로직이 굉장히 많다. 상태도 많고 하기 때문에 따로 분리한다.

import * as ActionType from "./action-type.js";

const InitializeState = { count: 0 };

export function reducer(state = InitializeState, action) {
  switch (action.type) {
    case ActionType.INCREASE:
      return { ...state, count: state.count + 1 };
    case ActionType.DECREASE:
      return { ...state, count: state.count - 1 };
    case ActionType.RESET:
      return { ...state, count: 0 };
    default:
      return { ...state };
  }
}
