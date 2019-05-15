import {
  getAllTasks,
  createTask,
  deleteTask,
  completeTask,
  editTask
} from "./middleware";
const initialState = {
  task: [],
  loading: false
};

export const GET_TASK = "SET_TASK";
export const GET_TASK_PENDING = "GET_TASK_PENDING"
export const GET_TASK_FULFILLED = "GET_TASK_FULFILLED"

export const DELETE_TASK = "DELETE_TASK";
export const DELETE_TASK_PENDING = "DELETE_TASK_PENDING"
export const DELETE_TASK_FULFILLED = "GET_TASK_FULLFILLED"

export const COMPLETE_TASK = "COMPLETE_TASK";
export const COMPLETE_TASK_PENDING = "COMPLETE_TASK_PENDING"
export const COMPLETE_TASK_FULFILLED = "COMPLETE_TASK_FULFILLED"

export const EDIT_TASK = "EDIT_TASK"
export const EDIT_TASK_PENDING = "EDIT_TASK_PENDING"
export const EDIT_TASK_FULFILLED = "EDIT_TASK_FULFILLED"

export const CREATE_TASK = "CREATE_TASK"
export const CREATE_TASK_PENDING = "CREATE_TASK_PENDING"
export const CREATE_TASK_FULFILLED = "CREATE_TASK_FULFILLED"



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
export function delete(task) {
  return {
    type: DELETE_TASK,
    payload: task
  };
}
