import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Todo = ({ id, title, isDone, onUpdateTodo }) => (
  <li>
    <input
      type="checkbox"
      onChange={() => onUpdateTodo({
        id,
        isDone: !isDone,
      })}
      checked={isDone}
    />
    <Link to={`/todo/${id}`}>{title}</Link>
  </li>
);

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isDone: PropTypes.bool.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
};

export default Todo;
