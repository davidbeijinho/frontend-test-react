import todosLib from '../lib/todos';
import { loadTodos } from './index';

function loadTodosAction() {
  return (dispatch) => {
    todosLib.loadTodos()
      .then(response => response.json())
      .then(response => dispatch(loadTodos(response)));
  };
}

export default loadTodosAction;
