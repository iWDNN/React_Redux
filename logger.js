export const logger = (store) => (next) => (action) => {
  console.groupCollapsed("action type =>", action.type);
  console.log("current state", store.getState());
  console.log("action payload", action.payload);
  console.groupEnd();

  next(action);
};
