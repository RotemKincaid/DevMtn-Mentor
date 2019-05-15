import { createStore } from "redux";
// import promiseMiddleware from "redux-promise-middleware";

const initialState = {
  task: []
};

export const SET_TASK = "SET_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_TASK:
      return { ...state, task: action.payload };
    case DELETE_TASK:
      return { ...state, task: state.task.splice(1) };
    case COMPLETE_TASK:
      return { ...state, task: action.payload };

    default:
      return state;
  }
}

export function setTask(task) {
  return {
    type: SET_TASK,
    payload: task
  };
}
export function deleteTask(task) {
  return {
    type: DELETE_TASK,
    payload: task
  };
}

export default createStore(reducer);
