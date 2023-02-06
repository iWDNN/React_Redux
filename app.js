export function createStore() {
  let state;
  let handlers = [];
  function dispatch(action) {
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  }
  function getState() {
    return state;
  }

  const store = {
    dispatch,
    getState,
  };
  return store;
}

const store = createStore();

console.log(store);
