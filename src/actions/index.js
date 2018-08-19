import * as constants from '../lib/constants';

export const loadTodos = todos => ({
  type: constants.LOAD_TODOS,
  todos,
});

export const updateTodo = todo => ({
  type: constants.UPDATE_TODO,
  todo,
});

export const addTodo = todo => ({
  type: constants.ADD_TODO,
  todo,
});

export const loadTodo = todo => ({
  type: constants.LOAD_TODO,
  todo,
});
