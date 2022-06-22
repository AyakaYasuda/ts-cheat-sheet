import { useRef, FormEvent, FC, useContext } from 'react';
import { TodoContext } from '../store/todo-context';
import classes from './NewTodoForm.module.css';

const NewTodoForm: FC = () => {
  const todoCtx = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
