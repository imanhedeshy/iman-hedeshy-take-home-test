import { useDrop, DropTargetMonitor } from "react-dnd";
import { Box, List, ListItem, Paper } from "@mui/material";
import Task from "./Task";
import { Task as TaskType } from "../state/useTodos";

interface ColumnProps {
  column: {
    id: string;
    name: string;
    tasks: TaskType[];
  };
  moveTask: (fromColumnId: string, toColumnId: string, taskId: string) => void;
  reorderTask: (
    columnId: string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
  handleTaskCompletion: (columnId: string, taskId: string) => void;
  triggerConfetti: () => void;
}

interface HoverItem {
  id: string;
  fromColumnId: string;
  index: number;
}

interface DropItem {
  id: string;
  fromColumnId: string;
}

const Column: React.FC<ColumnProps> = ({
  column,
  moveTask,
  reorderTask,
  handleTaskCompletion,
  triggerConfetti,
}) => {
  const [, drop] = useDrop<HoverItem, unknown, unknown>({
    accept: "TASK",
    hover: (item: HoverItem, monitor: DropTargetMonitor) => {
      const dragIndex = item.index;
      const hoverIndex = column.tasks.findIndex((task) => task.id === item.id);

      if (hoverIndex === null || hoverIndex === undefined) return;

      if (item.fromColumnId === column.id) {
        if (dragIndex !== hoverIndex) {
          reorderTask(column.id, dragIndex, hoverIndex);
          item.index = hoverIndex;
        }
      }

      if (monitor.isOver({ shallow: true })) {
        document.body.style.cursor = "move";
      }
    },
    drop: (item: DropItem) => {
      if (item.fromColumnId !== column.id) {
        moveTask(item.fromColumnId, column.id, item.id);

        if (column.id === "3") {
          triggerConfetti();
        }
      }
    },
  });

  return (
    <Box
      ref={drop}
      sx={{ height: "90%", padding: 2, backgroundColor: "#f5f5f5" }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 2, backgroundColor: "#e0e0e0", height: "96%" }}
      >
        <List>
          {column.tasks.map((task, index) => (
            <ListItem key={task.id} sx={{ padding: 0 }}>
              <Task
                task={task}
                columnId={column.id}
                index={index}
                reorderTask={reorderTask}
                handleTaskCompletion={handleTaskCompletion}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Column;
