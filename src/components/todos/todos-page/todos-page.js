import React from 'react';
import TodosForm from '../todos-form/todos-form-container';
import TodosList from '../todos-list/todos-list-container';

export default class TodoPage extends React.Component {
  render () {
    return (
      <div style={ {padding: '20px'} }>
        <TodosForm />
        <TodosList />
      </div>
    );
  }
}

