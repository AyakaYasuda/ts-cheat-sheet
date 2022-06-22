import TodoContextProvider from './store/todo-context';
import TodoList from './components/TodoList';
import NewTodoForm from './components/NewTodoForm';

const App = () => {
  return (
    <TodoContextProvider>
      <NewTodoForm />
      <TodoList />
    </TodoContextProvider>
  );
};

export default App;
