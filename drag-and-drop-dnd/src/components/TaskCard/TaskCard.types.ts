// TaskStatus as enum because it is a fixed set of values
export enum TaskStatusEnum {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface Task {
  id: string;
  status: TaskStatusEnum;
  title: string;
  description: string;
};
