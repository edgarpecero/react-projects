import { DndContext, DragCancelEvent, DragEndEvent, DragOverEvent, DragStartEvent } from '@dnd-kit/core';
import { TaskStatusEnum } from './components/TaskCard/TaskCard.types';
import { ProvideTasks, useTasks } from './context/TaskContext/TaskContext';
import DeleteZone from './components/DeleteZone/DeleteZone';
import AddNewTask from './components/AddNewTask/AddNewTask';
import Kanban from './components/Kanban/Kanban';

const TaskApp = () => {
  const { setTasks } = useTasks();

  const handleDragEnd = (event: DragEndEvent) => {
    // active = the task being dragged
    // over = the dropzone being dragged over
    const { active, over } = event;

    // If there is no dropzone, return
    if (!over) return;

    const taskId = active.id as number;
    const newStatus = over.id as TaskStatusEnum;

    console.log('DraggableElementId: ' + taskId);
    console.log('Dropzone: ', newStatus);

    // Update the status of the task
    // TODO: Add filter when task dropped over delete zone to completely remove from todos
    setTasks((prevTask) =>
      prevTask.map(task =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  }

  /*
  Uncomment the following code to see the console logs
  
    const handleDragOver = (event: DragOverEvent) => {
      console.log('DropZone: ', event.over);
      console.log('Element: ', event.active);
    }

    const handleDragStart = (event: DragStartEvent) => {
      console.log('DragStartEvent - DraggableElementId: ' + event.active.id);
    }

    const handleCancelDrop = (event: DragCancelEvent) => {
      console.log('DragCancelEvent - DraggableElementId: ' + event.active.id);
    }
  */

  return (
    <div className="p-4">
      <div className="flex flex-col items-ceter justify-center gap-8">
        <DndContext onDragEnd={handleDragEnd} >
          <AddNewTask />
          <Kanban />
          <DeleteZone />
        </DndContext>
      </div>
    </div>
  );
}


export default function App() {
  return (
    <ProvideTasks>
      <TaskApp />
    </ProvideTasks>
  );
};