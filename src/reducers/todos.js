import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../constants';

export const initialTodos = [];

function getNextId (todos) {
  if (!todos || !todos.length) {
    return 0;
  }
  const maxId = todos
    .sort((a, b) => b.id - a.id)[0].id;
  return maxId + 1;
}

function newTodo (todo, todoId) {
  return {
    todo,
    id: todoId,
    isCompleted: false
  };
}

export default function (state = initialTodos, action) {
  if (!action || !action.type) return state;

  switch (action.type) {
    case ADD_TODO: {
      if (Array.isArray(action.todo)) {
        return [...state, ...action.todo];
      }
      const nextTodoId = getNextId(state);
      const todo = newTodo(action.todo, nextTodoId);
      return [...state, todo];
    }
    case DELETE_TODO: {
      if (typeof action.todoId === 'undefined') {
        return state;
      }

      const todoIndex = state.findIndex(t => t.id === action.todoId);
      return [...state.slice(0, todoIndex), ...state.slice(todoIndex + 1)];
    }
    case TOGGLE_COMPLETED: {
      return state.map(t => {
        if (t.id === action.todo.id) {
          return { ...t, isCompleted: action.isCompleted };
        }
        return t;
      });
    }
    default:
      return state;
  }
}
