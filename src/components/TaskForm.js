import React, { useState } from 'react';

function TaskForm({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: Date.now(),
        name: newTask,
        completed: false,
      };

      // Modificar aquí para colocar la nueva tarea al principio del array
      const updatedTasks = [newTaskObject, ...tasks];
      
      setTasks(updatedTasks);
      setNewTask('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTask}
        onChange={handleInputChange}
        required = "true"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;


