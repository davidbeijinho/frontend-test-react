import todosLib from '../lib/todos';
import { updateTodo } from './index';

function updateTodoAction(todo) {
  return (dispatch) => {
    todosLib.updateTodo(todo)
      .then(response => response.json())
      .then(response => dispatch(updateTodo(response)));
  };
}

export default updateTodoAction;
