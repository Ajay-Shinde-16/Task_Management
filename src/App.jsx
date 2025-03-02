import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

const App = () => {
  const [reload, setReload] = useState(false);

  const refreshTasks = () => setReload(!reload);

  return (
    <div className="container">
      <h1>Task Management System</h1>
      <TaskForm onTaskAdded={refreshTasks} />
      <TaskList key={reload} />
    </div>
  );
};

export default App;
