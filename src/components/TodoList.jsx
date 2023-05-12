import React from 'react';

const TodoList = ({ todos, handleDelete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ color: getColorForStatus(todo.status) }}>
          {todo.title} - {todo.date}
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const getColorForStatus = status => {
  switch (status) {
    case 'in-progress':
      return 'blue';
    case 'done':
      return 'green';
    default:
      return 'red';
  }
};

export default TodoList;
