import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks }) {
  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          completeTask={() => completeTask(task.id)}
          deleteTask={() => deleteTask(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;

