import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from './api/tasks';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []); // runs once on mount

  const handleAddTask = async (data) => {
    await createTask(data);
    fetchTasks();
  };

  const handleUpdateTask = async (id, data) => {
    await updateTask(id, data);
    setEditingTask(null);
    fetchTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm
        onSubmit={editingTask ? handleUpdateTask : handleAddTask}
        initialData={editingTask}
      />
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;