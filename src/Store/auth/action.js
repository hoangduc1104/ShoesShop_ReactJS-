import { LOADING_TODO, GETME_TODO } from './constant';

export const getMeTodo = (payload) => ({
  type: GETME_TODO,
  payload,
});
export const loadingTodo = (payload) => ({
  type: LOADING_TODO,
  payload,
});
