import { useState, useEffect } from 'react';
import TaskForm from './TaskForm/TaskForm';
import TaskList from './TaskList/TaskList';
import './Home.css';

function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Task Manager</h1>
        <p className="tasks-remaining">
          {tasks.filter(t => !t.completed).length} tasks remaining
        </p>
      </header>
      <main className="home-main">
        <TaskForm onAdd={addTask} />
        <TaskList 
          tasks={tasks} 
          onToggle={toggleTask} 
          onDelete={deleteTask} 
        />
      </main>
    </div>
  );
}

export default Home;