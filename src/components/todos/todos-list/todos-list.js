import React, {PropTypes, Component} from 'react';
import Paper from 'material-ui/Paper';
import {List} from 'material-ui/List';
import TodoItem from '../todo-item/todo-item-container';

export class TodosList extends Component {
  getTodos = () => {
    return this.props.todos.map((todo, index) =>
      (<TodoItem key={ todo.id } todo={ todo } toggleCompleted={ this.props.toggleCompleted }/>)
    );
  }

  render () {
    if (!this.props.todos.length) {
      return null;
    }
    return (
      <Paper style={ {padding: '20px', marginBottom: '20px'} }>
        <List>
          { this.getTodos() }
        </List>
      </Paper>
    );
  }
}
;
TodosList.defaultProps = {
  todos: []
};
TodosList.propTypes = {
  todos: PropTypes.array,
  toggleCompleted: PropTypes.func
};

