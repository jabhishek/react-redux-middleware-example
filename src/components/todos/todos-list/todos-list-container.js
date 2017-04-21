import {connect} from 'react-redux';
import {TodosList} from './todos-list';
import {toggleCompleted} from '../../../actionCreators/todoActions';

const mapStateToProps = ({todos}) => {
  return {
    todos
  };
};
const mapDispatchToProps = { toggleCompleted };

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
