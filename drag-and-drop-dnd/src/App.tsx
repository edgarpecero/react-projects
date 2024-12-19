import { DndContext, DragCancelEvent, DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import { Task } from './components/TaskCard/TaskCard.types';
import { COLUMNS } from './data/columns';
import Column from './components/Column/Column';
import { ProvideTasks, useTasks } from './context/TaskContext/TaskContext';

const KanbanTaskApp = () => {
  const { tasks, setTasks } = useTasks();

  const handleDragEnd = (event: DragEndEvent) => {
    console.log('DragEndEvent - DraggableElementId: ' + event.active.id);
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as number;
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

  const filteredTaskByColumn = (columnId: string) => (
    tasks.filter((task) => task.status === columnId)
  );

  return (
    <div className="p-4">
      <div className="flex flex-col items-ceter justify-center gap-8">
        <DndContext
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}
          onDragStart={handleDragStart}
          onDragCancel={handleCancelDrop}
        >
          <div className='flex gap-8 width-full justify-center'>
            {COLUMNS.map((column) => {
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={filteredTaskByColumn(column.id)}
                />
              );
            })}
          </div>
        </DndContext>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <ProvideTasks>
      <KanbanTaskApp />
    </ProvideTasks>
  );
};