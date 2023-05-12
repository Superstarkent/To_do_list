import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };
  
  const handleDelete = index => {
    setTodos(prevTodos => {
      const newTodos = [...prevTodos];
      newTodos.splice(index, 1);
      return newTodos;
    });
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <h1>To do List:</h1>
      <TodoList todos={todos} handleDelete={handleDelete} />
    </div>
  );
};

export default App;