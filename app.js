function createStore(worker) {
  let state;
  let handlers = []; // 구독기 , 데이터가 바뀐 타이밍을 제공해주는, 함수를 받을테니 (구독할테니) 데이터가 바뀌면 그 함수를 호출해줘.?

  function send(action) {
    state = worker(state, action);
    handlers.forEach((handler) => handler());
  }
  function subscribe(handler) {
    // 구독기
    handlers.push(handler);
  }
  function getState() {
    return state;
  }

  return { send, getState, subscribe };
}

function worker(state = { count: 0 }, action) {
  //action을 제공해줘야한다 무슨일을 해라 컨벤션
  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + 1 };
    default:
      return { ...state };
  }
}

const store = createStore(worker);
store.subscribe(function () {
  console.log(store.getState());
});
store.subscribe(function () {
  console.log("구독된 함수 호출 완료!");
});
store.send({ type: "increase" }); // action은 타입이라는 작은 속성을 가진 약속이 있다.
store.send();
store.send();
