import React, { useEffect, useState } from 'react';
import { getTasks, addTask, completeTask, deleteTask } from '../services/api';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

const TaskPage = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks(token);
      setTasks(data);
    };
    fetchTasks();
  }, [token]);

  const handleAddTask = async (task) => {
    const newTask = await addTask(task, token);
    setTasks((prev) => [...prev, newTask]);
  };

  const handleCompleteTask = async (taskId) => {
    await completeTask(taskId, token);
    setTasks((prev) => prev.map((t) => (t.id === taskId ? { ...t, completed: true } : t)));
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId, token);
    setTasks((prev) => prev.filter((t) => t.id !== taskId));
  };

  return (
    <div>
      <AddTaskForm onAdd={handleAddTask} />
      <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default TaskPage;
