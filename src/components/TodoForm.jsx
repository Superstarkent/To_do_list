import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('not-started');

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = {
      title: title,
      date: date,
      status: status
    };
    addTodo(newTodo);
    setTitle('');
    setDate('');
    setStatus('not-started');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Date:
        <input
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        Status:
        <select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="not-started">Not Started</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </label>
      <br />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;