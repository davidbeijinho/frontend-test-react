import todosLib from '../lib/todos';
import { loadTodo } from './index';

function loadTodoAction(todo) {
  return (dispatch) => {
    todosLib.loadTodo(todo)
      .then(response => response.json())
      .then(response => dispatch(loadTodo(response)));
  };
}

export default loadTodoAction;
