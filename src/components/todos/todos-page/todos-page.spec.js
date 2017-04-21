import React from 'react';
import { shallow } from 'enzyme';
import Todos from './todos-page';
import TodosForm from '../todos-form/todos-form-container';
import TodosList from '../todos-list/todos-list-container';
import { expect } from 'chai';

describe('Todos', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Todos />);
  });

  it('should exist', () => {
    expect(wrapper.node).to.deep.equal(
        <div style={ { padding: '20px' } }>
          <TodosForm />
          <TodosList />
        </div>
    );
  });
});
