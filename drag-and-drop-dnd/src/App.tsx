import { useState } from 'react';
import { DndContext, DragCancelEvent, DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import { Task } from './components/TaskCard/TaskCard.types';
import { INITIAL_TASKS } from './data/initialTask';
import { COLUMNS } from './data/columns';
import Column from './components/Column/Column';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const handleDragEnd = (event: DragEndEvent) => {
    console.log('DragEndEvent - DraggableElementId: ' + event.active.id);
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task['status'];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
            ...task,
            status: newStatus,
          }
          : task,
      ),
    );
  }

  const handleDragOver = (event: DragOverEvent) => {
    console.log('DragOverEvent over ColumnId: ' + event.over?.id);
  }

  const handleDragStart = (event: DragStartEvent) => {
    // console.log(event.active);
    console.log('DragStartEvent - DraggableElementId: ' + event.active.id);
  }

  const handleCancelDrop = (event: DragCancelEvent) => {
    console.log('DragCancelEvent - DraggableElementId: ' + event.active.id);
  }


  return (
    <div className="p-4">
      <div className="flex gap-8">
        <DndContext
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDragStart={handleDragStart}
          onDragCancel={handleCancelDrop}
        >
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
}
