import todoReducer, { initialTodos } from './todos';
import { ADD_TODO, TOGGLE_COMPLETED, DELETE_TODO } from '../constants';
import { expect } from 'chai';

describe('todos reducer', () => {
  it('should return default state if no state passed', () => {
    expect(todoReducer()).to.deep.equal(initialTodos);
  });
  it('should return default state if no action passed', () => {
    expect(todoReducer([])).to.deep.equal([]);
  });
  it('should return default state if action has no type passed', () => {
    expect(todoReducer([], {})).to.deep.equal([]);
  });

  describe('Add todos', () => {
    it('should add todos', () => {
      const todoAdded = 'TEST2';
      const expectedTodo = { id: 0, todo: todoAdded, isCompleted: false };
      expect(todoReducer([], { type: ADD_TODO, todo: todoAdded }))
        .to.deep.equal([expectedTodo]);
    });

    it('should increment todo id correctly', () => {
      const todoAdded = 'TEST3';
      const initialTodos = [
        { id: 1, todo: 'TEST1', isCompleted: false },
        { id: 2, todo: 'TEST2', isCompleted: false }
      ];
      const expectedTodo = { id: 3, todo: todoAdded, isCompleted: false };
      expect(todoReducer(initialTodos, { type: ADD_TODO, todo: todoAdded }))
        .to.deep.equal([...initialTodos, expectedTodo]);
    });
  });

  describe('Delete todo', () => {
    it('should delete todo if exists', () => {
      const initialTodos = [
        { id: 1, todo: 'TEST1', isCompleted: false },
        { id: 2, todo: 'TEST2', isCompleted: false },
        { id: 3, todo: 'TEST3', isCompleted: false }
      ];

      expect(todoReducer(initialTodos, { type: DELETE_TODO, todoId: 1 }).map(t => t.id)).to.deep.equal([2, 3]);
      expect(todoReducer(initialTodos, { type: DELETE_TODO, todoId: 2 }).map(t => t.id)).to.deep.equal([1, 3]);
      expect(todoReducer(initialTodos, { type: DELETE_TODO, todoId: 3 }).map(t => t.id)).to.deep.equal([1, 2]);
    });
  });

  describe('Mark as complete', () => {
    it('should mark todo as complete', () => {
      const todo = { id: 1, todo: 'TEST1', isCompleted: false };
      const expectedTodo = { id: 1, todo: 'TEST1', isCompleted: true };

      const initialTodos = [
        todo,
        { id: 2, todo: 'TEST2', isCompleted: false }
      ];

      const updatedTodos = todoReducer(initialTodos, { type: TOGGLE_COMPLETED, todo: todo, isCompleted: true });
      expect(updatedTodos[0])
        .to.deep.equal(expectedTodo);
    });
    it('should toggle todo complete', () => {
      const todo = { id: 1, todo: 'TEST1', isCompleted: true };
      const expectedTodo = { id: 1, todo: 'TEST1', isCompleted: false };

      const initialTodos = [
        todo,
        { id: 2, todo: 'TEST2', isCompleted: false }
      ];

      const updatedTodos = todoReducer(initialTodos, { type: TOGGLE_COMPLETED, todo: todo, isCompleted: false });
      expect(updatedTodos[0])
        .to.deep.equal(expectedTodo);
    });
  });
});
