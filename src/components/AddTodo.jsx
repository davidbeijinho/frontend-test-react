import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import addTodo from '../actions/addTodo';
import FormInput from './FormInput';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumbitEvent = this.handleSumbitEvent.bind(this);
  }

  handleSumbitEvent() {
    const { onAddTodo, history } = this.props;
    onAddTodo(this.state).then((todo) => {
      history.push(`/todo/${todo.id}`);
    });
  }

  handleInputChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { title, description } = this.state;
    return (
      <div>
        <FormInput
          onChange={this.handleInputChange}
          label="Title"
          name="title"
          value={title}
        />
        <FormInput
          onChange={this.handleInputChange}
          label="Description"
          name="description"
          value={description}
        />
        <button type="submit" onClick={this.handleSumbitEvent}>Add</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTodo: todo => dispatch(addTodo(todo)),
});

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default withRouter(connect(null, mapDispatchToProps)(AddTodo));
