import React, { useState } from 'react';
import Swal from 'sweetalert2';

function TaskItem({ task, completeTask, deleteTask }) {
  const [isCompleted, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    if (!isCompleted) {
      Swal.fire({
        title: 'Confirmar acción',
        text: '¿Estás seguro de que quieres marcar esta tarea como completada?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          completeTask();
          setCompleted(true);
        }
      });
    } else {
      setCompleted(false);
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Confirmar acción',
      text: '¿Estás seguro de que quieres eliminar esta tarea?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask();
      }
    });
  };

  return (
    <div className={`task-item ${isCompleted ? 'completed' : ''}`}>
      <p>{task.name}</p>
      <button
        onClick={handleComplete}
        disabled={isCompleted}
        className={`complete-button ${isCompleted ? 'completed' : ''}`}
      >
        {isCompleted ? 'Completado' : 'Completar'}
      </button>
      <button className="delete-button" onClick={handleDelete}>
        Eliminar
      </button>
    </div>
  );
}

export default TaskItem;




