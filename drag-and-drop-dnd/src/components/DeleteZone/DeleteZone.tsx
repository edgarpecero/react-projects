import { useDroppable } from '@dnd-kit/core';
import { useTasks } from '../../context/TaskContext/TaskContext';
import { TaskStatusEnum } from '../TaskCard/TaskCard.types';
import { useMemo } from 'react';

const DeleteZone = () => {
  const { tasks } = useTasks();
  const { setNodeRef } = useDroppable({
    id: TaskStatusEnum.DELETED,
  });

  const deletedTasks = useMemo(
    () => tasks.filter(task => task.status === TaskStatusEnum.DELETED),
    [tasks]
  );

  return (
    <div className="flex justify-center items-center gap-24">
      <div className='flex justify-center items-center p-2 mt-8'>
        <div ref={setNodeRef} className='w-80 font-bold rounded-lg bg-[#FF7F7F] h-60 flex justify-center items-center'>
          <h3>Trash</h3>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center mt-5'>
        <h3 className='text-black font-semibold'>Deleted tasks:</h3>
        {deletedTasks.map((task) => (
          <p key={task.id} className='m-1 p-1 text-black font-semibold border border-red-500 line-through'>
            {task.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default DeleteZone;
