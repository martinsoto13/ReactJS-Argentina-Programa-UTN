import React, { useState } from 'react';

function TaskItem({ task, completeTask, deleteTask }) {
  const [isAlertOpen, setAlertOpen] = useState(false);
  const [isCompleted, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    completeTask();
    setCompleted(true);
  };

  const handleDelete = () => {
    // Mostrar un alert para confirmar la eliminación
    setAlertOpen(true);
  };

  const handleConfirmDelete = () => {
    // Si el usuario confirma, ejecutar la función de eliminación
    deleteTask();
    setAlertOpen(false);
  };

  const handleCancelDelete = () => {
    // Si el usuario cancela, cerrar el alert
    setAlertOpen(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <p>{task.name}</p>
      <button onClick={handleComplete} disabled={isCompleted}>
        {isCompleted ? 'Completado' : 'Completar'}
      </button>
      <button className="delete-button" onClick={handleDelete}>Eliminar</button>

      {isAlertOpen && (
        <div className="delete-alert">
          <p>¿Estás seguro de que quieres eliminar esta tarea?</p>
          <button className="delete-button" onClick={handleConfirmDelete}>Sí</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;


