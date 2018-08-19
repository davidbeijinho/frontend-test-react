import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';
import loadTodos from '../actions/loadTodos';
import updateTodo from '../actions/updateTodo';

const renderTodos = (todos, onUpdateTodo) => todos.map(todo => (
  <Todo
    key={todo.id}
    onUpdateTodo={onUpdateTodo}
    {...todo}
  />
));

class Todos extends React.Component {
  componentDidMount() {
    const { onLoadTodos } = this.props;
    onLoadTodos();
  }

  render() {
    const { todos, onUpdateTodo } = this.props;
    if (todos.length) {
      return (
        <ul>
          {renderTodos(todos, onUpdateTodo)}
        </ul>
      );
    }
    return (<p>Loading...</p>);
  }
}

const mapStateToProps = state => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = dispatch => ({
  onLoadTodos: () => dispatch(loadTodos()),
  onUpdateTodo: todo => dispatch(updateTodo(todo)),
});

Todos.propTypes = {
  onLoadTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  onUpdateTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
