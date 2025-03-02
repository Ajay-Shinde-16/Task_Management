import { useState, useEffect } from "react";
import axios from "axios"; 
import { fetchTasks, deleteTask } from "../api/api"; 
import "../styles.css";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8080/api"; // Fallback if env not loaded

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await fetchTasks();
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description);
  };

  const handleUpdate = async (id) => {
    console.log(`Updating task ${id} at ${API_BASE_URL}/tasks/${id}`); // Debugging

    try {
      const response = await axios.put(`${API_BASE_URL}/tasks/${id}`, {
        title: editTitle,
        description: editDescription,
        status: "Pending", // Assuming status field
      });

      console.log("Task updated successfully:", response.data);
      setEditingTask(null);
      loadTasks(); 
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      loadTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {editingTask === task.id ? (
                <>
                  <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                  <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
                  <button onClick={() => handleUpdate(task.id)}>Save</button>
                  <button onClick={() => setEditingTask(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <button onClick={() => handleEdit(task)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
