import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css'; // Puedes crear este archivo para tus estilos generales

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <footer>
        <p>Realizado por Martin Maldonado - React JS - Argentina Programa - 2023</p>
      </footer>
    </div>
  );
}

export default App;

