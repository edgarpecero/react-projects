import React, { createContext, useCallback, useContext, useState } from 'react';
import { TaskStatusEnum } from '../TaskCard/TaskCard.types';

interface Props {
  children: React.ReactNode;
}

const TodosContext = createContext({});

const INITIAL_TODOS = [
  { id: 1, text: "buy milk", status: TaskStatusEnum.TODO },
  { id: 2, text: "wash bike", status: TaskStatusEnum.IN_PROGRESS },
  { id: 3, text: "do the budget", status: TaskStatusEnum.DONE },
  { id: 4, text: "call jane", status: TaskStatusEnum.TODO },
];

export const ProvideTodos = React.memo(({ children }: Props) => {
  const Todos = useProvideTodos();
  return <TodosContext.Provider value={Todos}>{children}</TodosContext.Provider>;
});

export const useTodos = () => {
  return useContext(TodosContext);
};

const useProvideTodos = () => {
  const [todos, setTodos] = useState(INITIAL_TODOS);

  const onAddTodo = (taskName: string) => {
    const newTask = {
      id: todos.length + 1,
      text: taskName,
      status: TaskStatusEnum.TODO,
    };
    setTodos(prevTodos => [...prevTodos, newTask]);
  };

  return {
    todos,
    setTodos,
    onAddTodo,
  };
};
