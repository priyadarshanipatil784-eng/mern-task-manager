import React from 'react';

function TaskItem({ task, onEdit, onDelete }) {
  return (
    <li className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>Status: {task.status}</span>{' '}
      <span>Due: {task.dueDate ? task.dueDate.slice(0, 10) : 'N/A'}</span>
      <div>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task._id)}>Delete</button>
      </div>
    </li>
  );
}

export default TaskItem;