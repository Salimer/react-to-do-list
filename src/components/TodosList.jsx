import TodoItem from '@/components/TodoItem';
import PropTypes from 'prop-types';

const TodosList = ({ todosProps, handleChange, delTodo, setUpdate }) => {
    return (
        <ul>
            {todosProps.map((todo) => (
                <TodoItem key={todo.id} itemProp={todo} handleChange={handleChange} delTodo={delTodo} setUpdate={setUpdate} />
            ))}
        </ul>
    )
}
TodosList.propTypes = {
    todosProps: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    setUpdate: PropTypes.func.isRequired
}
export default TodosList;