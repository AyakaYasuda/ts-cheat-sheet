import { FC, useContext } from 'react';
import { TodoContext } from '../store/todo-context';
import TodoItem from './TodoItem';
import Todo from '../models/todo';
import classes from './TodoList.module.css';

const TodoList: FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onDeleteTodo={todoCtx.deleteTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
