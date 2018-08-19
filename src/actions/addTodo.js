import todosLib from '../lib/todos';
import { addTodo } from './index';

function addTodoAction(todo) {
  return dispatch => todosLib.addTodo(todo)
    .then(response => response.json())
    .then((response) => {
      dispatch(addTodo(response));
      return response;
    });
}

export default addTodoAction;
