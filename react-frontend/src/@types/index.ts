export interface ColumnData {
  id: string;
  name: string;
  tasks: TaskData[];
}

export interface DraggedItem {
  index: number;
}

export interface TaskData {
  id: string;
  content: string;
  status: string;
  title?: string;
  description?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}
