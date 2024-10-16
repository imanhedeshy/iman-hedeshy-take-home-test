import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import useTodosStore from "../state/useTodos";
import { useState } from "react";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

const AddTodoForm = ({
  open,
  onClose,
  columnId,
}: {
  open: boolean;
  onClose: () => void;
  columnId: string;
}) => {
  const addTodo = useTodosStore((state) => state.addTodo);
  const [loading, setLoading] = useState(false);

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Task</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ title: "", description: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            setLoading(true);
            addTodo(values.title, values.description, columnId);
            resetForm();
            setLoading(false);
            onClose();
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                as={TextField}
                name="title"
                label="Title"
                variant="outlined"
                fullWidth
                margin="normal"
                error={Boolean(touched.title && errors.title)}
                helperText={touched.title && errors.title}
              />
              <Field
                as={TextField}
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                margin="normal"
                error={Boolean(touched.description && errors.description)}
                helperText={touched.description && errors.description}
              />
              <DialogActions>
                <Button onClick={onClose} color="secondary">
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : "Add"}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoForm;
