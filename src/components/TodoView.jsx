import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadTodo from '../actions/loadTodo';

class TodoView extends React.Component {
  componentDidMount() {
    const { onLoadTodo, match } = this.props;
    onLoadTodo(match.params.id);
  }

  render() {
    const { todo } = this.props;
    if (todo.id) {
      return (
        <div>
          <p>
            ID:
            {todo.id}
          </p>
          <p>
            Title:
            {todo.title}
          </p>
          <p>
            Description:
            {todo.description}
          </p>
          <p>
            Completed:
            {todo.isDone ? 'Done' : 'Working'}
          </p>
          <p>
            Tags:
            {todo.tags}
          </p>
          <p>
            Created:
            {todo.createdAt}
          </p>
          <p>
            Priority:
            {todo.priority}
          </p>
        </div>
      );
    }
    return (<p>Loading...</p>);
  }
}

const mapStateToProps = state => ({
  todo: state.todos.active,
});

const mapDispatchToProps = dispatch => ({
  onLoadTodo: id => dispatch(loadTodo(id)),
});


TodoView.propTypes = {
  onLoadTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoView));
