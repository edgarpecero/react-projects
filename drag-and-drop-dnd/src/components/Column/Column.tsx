import { useDroppable } from '@dnd-kit/core';
import { Column as ColumnType } from './Column.types';
import { Task } from '../TaskCard/TaskCard.types';
import TaskCard from '../TaskCard/TaskCard';

interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
};

const Column = ({ column, tasks }: ColumnProps) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className="flex flex-col border-2 border-green-300 w-52 p-2 justify-center items-center">
      <h2 className="mb-4 font-semibold text-neutral-800">{column.title}</h2>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
}

export default Column;
