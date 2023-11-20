import React, { useState } from 'react';

function TaskItem({ task, completeTask, deleteTask }) {
  const handleComplete = () => {
    completeTask();
  };

  const handleDelete = () => {
    deleteTask();
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <p>{task.name}</p>
      <button onClick={handleComplete}>Completar</button>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default TaskItem;

