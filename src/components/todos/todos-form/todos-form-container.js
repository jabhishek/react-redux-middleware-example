import {connect} from 'react-redux';
import {addTodo} from '../../../actionCreators/todoActions';
import { TodosForm } from './todos-form';

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: function (todo) {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(null, mapDispatchToProps)(TodosForm);
