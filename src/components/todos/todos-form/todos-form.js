import React, {PropTypes} from 'react';
import {Paper, TextField} from 'material-ui';

export class TodosForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  onTodoChange = (event) => {
    this.setState({
      newTodo: event.target.value
    });
  };

  onSubmit = (e) => {
    this.props.addTodo(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
    e.preventDefault();
  };

  render () {
    return (
      <Paper style={ {padding: '20px', marginBottom: '20px'} }>
        <form onSubmit={ this.onSubmit }>
          <TextField
            style={ {width: '100%'} }
            value={ this.state.newTodo }
            floatingLabelText="Enter Todo"
            onChange={ this.onTodoChange }/>
        </form>
      </Paper>
    );
  }
};
TodosForm.propTypes = {
  addTodo: PropTypes.func
};
