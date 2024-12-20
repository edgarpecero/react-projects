import { useCallback, useState } from "react";
import { useTasks } from "../../context/TaskContext/TaskContext";
import { Task } from "../TaskCard/TaskCard.types";

const AddNewTask = () => {
  const { onAddTask } = useTasks();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTask = useCallback(() => {
    if (title && description) {
      const newTask: Partial<Task> = {
        title,
        description,
      };
      onAddTask(newTask);
      setTitle('');
      setDescription('');
    } else {
      alert('Please fill in both title and description');
    }
  }, [title, description, onAddTask]);

  return (
    <div className="flex flex-col p-2 justify-center items-center">
      <h2 className="font-semibold text-neutral-800">
        Create new task:
      </h2>
      <div className="flex flex-col gap-2 p-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="p-2 border border-green-500 rounded"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="p-2 border border-green-500 rounded"
        />
        <button
          onClick={handleAddTask}
          className="p-2 bg-green-700 text-white rounded"
        >
          Add Task
        </button>
      </div>
    </div>

  );
};

export default AddNewTask;
