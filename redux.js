export const actionCreator = (type) => (payload) => ({ type, payload });

export function createStore(reducer, middlewares = []) {
  let state;
  let handlers = [];
  function dispatch(action) {
    state = reducer(state, action);
    handlers.forEach((handler) => handler());
  }

  function getState() {
    return state;
  }

  function subscribe(handler) {
    handlers.push(handler);
  }
  const store = { dispatch, subscribe, getState };

  middlewares = Array.from(middlewares).reverse();
  let lastDispatch = dispatch;

  middlewares.forEach((middleware, i) => {
    lastDispatch = middleware(store)(lastDispatch);
  });

  // 미들웨어가 먼저 작동하고 맨 마지막에 최초의 dispatch를 넣는 방식
  store.dispatch = lastDispatch;

  return store;
}
