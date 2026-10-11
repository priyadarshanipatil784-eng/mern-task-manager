import React, { useState, useEffect } from 'react';

const emptyForm = { title: '', description: '', status: 'pending', dueDate: '' };

function TaskForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        status: initialData.status || 'pending',
        dueDate: initialData.dueDate ? initialData.dueDate.slice(0, 10) : '',
      });
    } else {
      setFormData(emptyForm);
    }
  }, [initialData]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialData) onSubmit(initialData._id, formData);
    else onSubmit(formData);
    setFormData(emptyForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={formData.title}
             onChange={handleChange} required />
      <textarea name="description" placeholder="Description"
                value={formData.description} onChange={handleChange} />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <input type="date" name="dueDate" value={formData.dueDate}
             onChange={handleChange} />
      <button type="submit">{initialData ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
}

export default TaskForm;