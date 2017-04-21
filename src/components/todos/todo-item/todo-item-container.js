import {connect} from 'react-redux';
import TodoItem from './todo-item';
import {deleteTodo} from '../../../actionCreators/todoActions';

const mapDispatchToProps = { deleteTodo };

export default connect(null, mapDispatchToProps)(TodoItem);
