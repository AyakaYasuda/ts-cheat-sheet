import React, { FC, ReactNode, useState } from 'react';
import Todo from '../models/todo';

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  deleteTodo: () => {},
});

const TodoContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodoItems((prev) => prev.concat(newTodo));
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodoItems((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const contextValue: TodoContextObj = {
    items: todoItems,
    addTodo: addTodoHandler,
    deleteTodo: deleteTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
