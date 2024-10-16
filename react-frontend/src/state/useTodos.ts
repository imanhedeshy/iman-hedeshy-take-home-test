import { create } from "zustand";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface Column {
  id: string;
  name: string;
  tasks: Task[];
}

interface TodosState {
  columns: Column[];
  addTodo: (title: string, description: string, columnId: string) => void;
  deleteTask: (columnId: string, taskId: string) => void;
  moveTask: (fromColumnId: string, toColumnId: string, taskId: string) => void;
  reorderTask: (
    columnId: string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
}

const useTodosStore = create<TodosState>((set) => ({
  columns: [
    { id: "1", name: "To Do", tasks: [] },
    { id: "2", name: "Doing", tasks: [] },
    { id: "3", name: "Done", tasks: [] },
  ],
  addTodo: (title, description, columnId) => {
    set((state) => ({
      columns: state.columns.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            tasks: [
              ...column.tasks,
              {
                id: Date.now().toString(),
                title,
                description,
                status: columnId,
              },
            ],
          };
        }
        return column;
      }),
    }));
  },
  deleteTask: (columnId: string, taskId: string) => {
    set((state) => ({
      columns: state.columns.map((column) => {
        if (column.id === columnId) {
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.id !== taskId),
          };
        }
        return column;
      }),
    }));
  },
  moveTask: (fromColumnId: string, toColumnId: string, taskId: string) => {
    set((state) => {
      const taskToMove = state.columns
        .find((col) => col.id === fromColumnId)
        ?.tasks.find((task) => task.id === taskId);

      if (!taskToMove) return state;

      return {
        columns: state.columns.map((column) => {
          if (column.id === fromColumnId) {
            return {
              ...column,
              tasks: column.tasks.filter((task) => task.id !== taskId),
            };
          } else if (column.id === toColumnId) {
            return { ...column, tasks: [...column.tasks, taskToMove] };
          }
          return column;
        }),
      };
    });
  },
  reorderTask: (columnId: string, dragIndex: number, hoverIndex: number) => {
    set((state) => {
      const column = state.columns.find((col) => col.id === columnId);
      if (!column) return state;

      const updatedTasks = [...column.tasks];
      const [removed] = updatedTasks.splice(dragIndex, 1);
      updatedTasks.splice(hoverIndex, 0, removed);

      return {
        columns: state.columns.map((col) =>
          col.id === columnId ? { ...col, tasks: updatedTasks } : col
        ),
      };
    });
  },
}));

export default useTodosStore;
