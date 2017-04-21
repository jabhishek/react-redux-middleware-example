export const logger = store => next => action => {
  console.groupCollapsed(`action ${action.type}`);
  console.log('dispatching', action);
  console.log('old state', store.getState());
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(`action ${action.type}`);
  return result;
};

