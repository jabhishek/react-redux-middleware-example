import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../constants';

export const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

export const toggleCompleted = (todo, isCompleted) => ({
  type: TOGGLE_COMPLETED,
  todo,
  isCompleted
});

export const deleteTodo = (todoId) => ({
  type: DELETE_TODO,
  todoId
});
