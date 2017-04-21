import React from 'react';
import {TodosList} from './todos-list';
import {shallow} from 'enzyme';
import {expect} from 'chai';

describe('TodosList', () => {
  it('should exist', () => {
    const wrapper = shallow(<TodosList />);
    expect(wrapper).to.exist;
    expect(wrapper.node).to.be.null;
    expect(wrapper.find('List').length).to.equal(0);
    expect(wrapper.find('TodoItem').length).to.equal(0);
  });

  it('should render three list items if 3 todos are passed', () => {
    const todos = ['Todo 1', 'Todo 2', 'Todo 3'];
    const wrapper = shallow(<TodosList todos={ todos }/>);
    const listItems = wrapper.find('Connect(TodoItem)');
    expect(listItems.length).to.equal(3);

    const texts = listItems.map(i => i.prop('todo'));
    expect(texts).to.deep.equal(todos);
  });
});
