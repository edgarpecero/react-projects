import { Task, TaskStatusEnum } from "../components/TaskCard/TaskCard.types";

export const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Research Project',
    description: 'Gather requirements and create initial documentation',
    status: TaskStatusEnum.TODO,
  },
  {
    id: '2',
    title: 'Design System',
    description: 'Create component library and design tokens',
    status: TaskStatusEnum.TODO,
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'Implement REST API endpoints',
    status: TaskStatusEnum.IN_PROGRESS,
  },
  {
    id: '4',
    title: 'Testing',
    description: 'Write unit tests for core functionality',
    status: TaskStatusEnum.DONE,
  },
  {
    id: '99',
    title: 'Testing',
    description: 'Write unit tests for Drag functionality',
    status: TaskStatusEnum.DONE,
  },
];