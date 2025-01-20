import axios from 'axios';

const API_URL = 'http://localhost:3001'; 

// Login
export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/auth/login`, { email, password });
  return response.data;
};

// Get tasks
export const getTasks = async (token) => {
  const response = await axios.get(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Add a new task
export const addTask = async (task, token) => {
  const response = await axios.post(`${API_URL}/tasks`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Mark task as completed
export const completeTask = async (task, token) => {
  const response = await axios.put(`${API_URL}/tasks/${task.id}`, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Delete a task
export const deleteTask = async (taskId, token) => {
  const response = await axios.delete(`${API_URL}/tasks/${taskId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
