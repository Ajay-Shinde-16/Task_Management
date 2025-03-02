import axios from "axios";

const API_URL = "http://localhost:8080/api/tasks";

export const fetchTasks = async () => {
  return await axios.get(API_URL);
};

export const createTask = async (task) => {
  return await axios.post(API_URL, task, {
    headers: { "Content-Type": "application/json" },
  });
};

export const updateTask = async (id, taskData) => {
  try {
      const response = await axios.put(
          `${process.env.REACT_APP_API_BASE_URL}/tasks/${id}`, 
          taskData, 
          { headers: { "Content-Type": "application/json" } } // Ensure correct headers
      );

      console.log("Task updated successfully:", response.data);

      // Update the UI by fetching the latest tasks
      fetchTasks();
  } catch (error) {
      console.error("Error updating task:", error.response ? error.response.data : error);
  }
};



export const deleteTask = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
