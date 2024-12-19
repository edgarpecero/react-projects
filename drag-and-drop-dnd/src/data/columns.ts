import { Column } from "../components/Column/Column.types";
import { TaskStatusEnum } from "../components/TaskCard/TaskCard.types";

export const COLUMNS: Column[] = [
  { id: TaskStatusEnum.TODO, title: 'To Do' },
  { id: TaskStatusEnum.IN_PROGRESS, title: 'In Progress' },
  { id: TaskStatusEnum.DONE, title: 'Done' },
];
