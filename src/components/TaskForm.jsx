import { useState } from "react";
import axios from "axios";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Client-side validation
    if (!title.trim()) {
      setError("Title cannot be empty.");
      return;
    }
    if (!description.trim()) {
      setError("Description cannot be empty.");
      return;
    }

    try {
      const newTask = { title, description, status: "PENDING" };
      await axios.post("http://localhost:8080/api/tasks", newTask);

      // Clear fields on success
      setTitle("");
      setDescription("");
      setError(null);

      // Notify parent component
      onTaskAdded();
    } catch (err) {
      console.error("Error creating task:", err.response || err);
      setError("Failed to create task. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
