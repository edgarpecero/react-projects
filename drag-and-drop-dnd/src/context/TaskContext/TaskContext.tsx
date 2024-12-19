import React, { createContext, useCallback, useContext, useState } from 'react';
import { INITIAL_TASKS } from '../../data/initialTask';
import { Task, TaskStatusEnum } from '../../components/TaskCard/TaskCard.types';

interface UseTasksContext {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onAddTask: (task: Task) => void;
}

const TasksContext = createContext({} as UseTasksContext);

export const ProvideTasks = React.memo(({ children }: { children: React.ReactNode; }) => {
  const Tasks = useProvideTasks();
  return <TasksContext.Provider value={Tasks}>{children}</TasksContext.Provider>;
});

export const useTasks = () => {
  return useContext(TasksContext);
};

const useProvideTasks = (): UseTasksContext => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);

  const onAddTask = useCallback((task: Task) => {
    const newTask = {
      id: tasks.length + 1,
      title: task.title,
      description: task.description,
      status: TaskStatusEnum.TODO,
    };
    setTasks(prevTask => [...prevTask, newTask]);
  }, [tasks]);

  return {
    tasks,
    setTasks,
    onAddTask,
  };
};
