import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;