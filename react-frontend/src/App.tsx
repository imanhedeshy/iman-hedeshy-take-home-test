import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

const TodoList = lazy(() => import("./pages/TodoList"));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<CircularProgress />}>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
