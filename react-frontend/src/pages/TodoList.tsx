import React, { useState } from "react";
import { Box, Paper, Button, Typography } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Column from "../components/Column";
import AddTodoForm from "../components/AddTodoForm";
import useTodosStore from "../state/useTodos";
import Confetti from "react-confetti";

const TodoList: React.FC = () => {
  const columns = useTodosStore((state) => state.columns);
  const moveTask = useTodosStore((state) => state.moveTask);
  const reorderTask = useTodosStore((state) => state.reorderTask);
  const deleteTask = useTodosStore((state) => state.deleteTask);
  const [showConfetti, setShowConfetti] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [currentColumnId, setCurrentColumnId] = useState<string>("1");

  const handleTaskCompletion = (columnId: string, taskId: string) => {
    deleteTask(columnId, taskId);
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box
        sx={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setCurrentColumnId(columns[0].id);
            setOpenModal(true);
          }}
          sx={{ marginY: 2 }}
        >
          Add Task
        </Button>

        {showConfetti && <Confetti />}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexGrow: 1,
            gap: 3,
          }}
        >
          {columns.map((column) => (
            <Paper
              key={column.id}
              elevation={3}
              sx={{
                flex: 1,
                padding: 2,
                backgroundColor: "primary.light",
                height: "100%",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 2 }}
              >
                {column.name}
              </Typography>
              <Column
                column={column}
                moveTask={moveTask}
                reorderTask={reorderTask}
                handleTaskCompletion={handleTaskCompletion}
                triggerConfetti={triggerConfetti}
              />
            </Paper>
          ))}
        </Box>
      </Box>

      {/* Add Task Modal */}
      <AddTodoForm
        open={openModal}
        onClose={() => setOpenModal(false)}
        columnId={currentColumnId}
      />
    </DndProvider>
  );
};

export default TodoList;
