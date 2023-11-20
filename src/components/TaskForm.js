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

      const updatedTasks = [...tasks, newTaskObject];
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
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TaskForm;

