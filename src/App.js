import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  // Estado para almacenar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Efecto para cargar las tareas desde el localStorage al iniciar la aplicación
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');

    if (storedTasks) {
      // Parsear las tareas desde JSON y establecerlas en el estado
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Efecto para guardar las tareas en localStorage cada vez que se actualiza el estado
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Lista de tareas actualizada:', tasks);
  }, [tasks]);

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      
      {/* Componente para agregar nuevas tareas */}
      <TaskForm tasks={tasks} setTasks={setTasks} />

      {/* Componente que muestra la lista de tareas */}
      <TaskList tasks={tasks} setTasks={setTasks} />

      <footer>
        <p>Realizado por Martin Maldonado - React JS - Argentina Programa - 2023</p>
      </footer>
    </div>
  );
}

export default App;


