import { COLUMNS } from "../../data/columns";
import Column from "../Column/Column";
import { TaskStatusEnum } from "../TaskCard/TaskCard.types";
import { useTasks } from "../../context/TaskContext/TaskContext";
import { useCallback } from "react";

const Kanban = () => {
  const { tasks } = useTasks();

  const filteredTaskByColumn = useCallback((columnId: TaskStatusEnum) => (
    tasks.filter((task) => task.status === columnId)
  ), [tasks]);

  return (
    <div className='flex gap-8 width-full justify-center'>
      {COLUMNS.map((column) => (
        <Column
          key={column.id}
          column={column}
          tasks={filteredTaskByColumn(column.id)}
        />
      ))}
    </div>
  )
}

export default Kanban;
