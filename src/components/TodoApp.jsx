import Header from '@/components/Header';
import TodosLogic from '@/components/TodosLogic';
import Navbar from './Navbar';

const TodoApp = () => {
  return (
    <div className='wrapper'>
      <Navbar />
        <div className='todos'>
        <Header />
      <TodosLogic />
        </div>
    </div>
  );
};
export default TodoApp;
