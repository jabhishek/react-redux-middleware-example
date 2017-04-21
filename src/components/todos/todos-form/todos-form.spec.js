import React from 'react';
import {shallow} from 'enzyme';
import {TodosForm} from './todos-form';
import chai, {expect} from 'chai';
import { noop } from 'lodash';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('TodosForm', () => {
  let wrapper;

  describe('with default props', () => {
    beforeEach(() => {
      wrapper = shallow(<TodosForm />);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should have a form', () => {
      const form = wrapper.find('form');
      expect(form.length).to.equal(1);
      expect(form.props().onSubmit).to.exist;
      expect(typeof form.props().onSubmit).to.equal('function');
    });
    it('should have a TextField', () => {
      const textField = wrapper.find('TextField');
      expect(textField.length).to.equal(1);
      expect(textField.props().value).to.equal('');
      expect(textField.props().floatingLabelText).to.equal('Enter Todo');
      expect(typeof textField.props().onChange).to.equal('function');
    });
    it('should have initial state correctly set', () => {
      expect(wrapper.state()).to.deep.equal({newTodo: ''});
    });

    describe('behavior', () => {
      it('should change the state on TextField change', () => {
        const textField = wrapper.find('TextField');
        textField.prop('onChange')({ target: { value: 'hello' } });
        expect(wrapper.state()).to.deep.equal({newTodo: 'hello'});
      });
    });
  });

  describe('on form submit', () => {
    let spy;
    beforeEach(() => {
      spy = sinon.spy();
      wrapper = shallow(<TodosForm addTodo={ spy }/>);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    it('should call addTodo', () => {
      wrapper.setState({ newTodo: 'hello' });
      wrapper.find('form').props().onSubmit({ preventDefault: noop });
      expect(spy).calledOnce;
      expect(spy).calledWithExactly('hello');

      expect(wrapper.state().newTodo).to.equal('');
    });
  });
});
