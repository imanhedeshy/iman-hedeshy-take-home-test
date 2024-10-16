import { useDrag, useDrop } from "react-dnd";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import { FaTrash, FaGripLines } from "react-icons/fa";
import { Task as TaskType } from "../state/useTodos";
import { useState } from "react";
import { motion } from "framer-motion";

interface TaskProps {
  task: TaskType;
  columnId: string;
  index: number;
  handleTaskCompletion: (columnId: string, taskId: string) => void;
  reorderTask: (
    columnId: string,
    dragIndex: number,
    hoverIndex: number
  ) => void;
}

const Task: React.FC<TaskProps> = ({
  task,
  columnId,
  index,
  handleTaskCompletion,
  reorderTask,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [shouldRemove, setShouldRemove] = useState(false);

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { id: task.id, fromColumnId: columnId, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "TASK",
    hover(item: { id: string; fromColumnId: string; index: number }) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      reorderTask(columnId, dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      setShouldRemove(true);
      handleTaskCompletion(columnId, task.id);
    }, 500);
  };

  return (
    <>
      {!shouldRemove && (
        <motion.div
          ref={(node) => drag(drop(node))}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: isDeleting ? 0 : 1,
            scale: isDeleting ? 2 : 1,
          }}
          transition={{ duration: 0.5 }}
          style={{
            width: "100%",
            marginBottom: "16px",
          }}
        >
          <Card
            sx={{
              width: "100%",
              opacity: isDragging ? 0.5 : 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="h6" component="div">
                  {task.title}
                </Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {task.description}
              </Typography>
            </CardContent>

            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px",
              }}
            >
              <IconButton>
                <FaGripLines />
              </IconButton>
              <IconButton onClick={() => setShowModal(true)}>
                <FaTrash />
              </IconButton>
            </CardActions>
          </Card>
        </motion.div>
      )}

      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogActions>
          <Button onClick={() => setShowModal(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              setShowModal(false);
              handleDelete();
            }}
            color="primary"
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Task;
