import * as constants from '../lib/constants';

const initialState = {
  todos: [],
  active: {
  },
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case constants.LOAD_TODOS:
      return {
        ...state,
        todos: [...action.todos],
      };
    case constants.UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.todo.id
          ? {
            ...action.todo,
          }
          : todo
        )),
      };
    case constants.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case constants.LOAD_TODO:
      return {
        ...state,
        active: action.todo,
      };
    default:
      return state;
  }
};

export default todos;
