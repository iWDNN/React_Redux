import { INCREASE } from "./action-type.js";
import * as Actions from "./actions.js";
import { reducer } from "./reducer.js";
import { actionCreator, createStore } from "./redux.js";

const store = createStore(reducer);

store.subscribe(function () {
  console.log(store.getState());
});

store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.decrease());
store.dispatch(Actions.decrease());
store.dispatch(Actions.decrease());
store.dispatch(Actions.reset());
