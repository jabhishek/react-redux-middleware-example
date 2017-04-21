import React, { Component } from 'react';
import {ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

const baseStyle = { borderBottom: '1px solid #eee' };
const completedStyle = { color: '#9e9e9e', textDecoration: 'line-through' };

export default class TodoItem extends Component {
  onChecked = (e, value) => {
    this.props.toggleCompleted(this.props.todo, value);
  };

  onDelete = (e) => {
    this.props.deleteTodo(this.props.todo.id);
    e.stopPropagation();
    return false;
  }

  render () {
    const { todo } = this.props;
    let style = baseStyle;
    if (todo.isCompleted) {
      style = { ...style, ...completedStyle };
    }
    return (
      <ListItem
        style={ style }
        leftCheckbox={<Checkbox onCheck={ this.onChecked } />}
        rightIconButton= {<IconButton><Delete onClick={ this.onDelete }/></IconButton>}
      >
        <div>{ todo.todo }</div>
      </ListItem>
    );
  }
}
TodoItem.propTypes = {
  deleteTodo: React.PropTypes.func,
  todo: React.PropTypes.object,
  toggleCompleted: React.PropTypes.func
};
