import React from 'react';
import { shallow } from 'enzyme';
import TodoItem from './todo-item';
import {ListItem} from 'material-ui/List';
import { expect } from 'chai';

describe('Todos', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TodoItem todo={ {id: 1, todo: 'test'} }/>);
  });

  it('should render correctly', () => {
    expect(wrapper.containsMatchingElement(
      <ListItem>
        <div>test</div>
      </ListItem>
    )).to.be.true;
  });
});
