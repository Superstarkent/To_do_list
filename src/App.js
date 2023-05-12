import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = newTodo => {
    setTodos([...todos, newTodo]);
  };
  

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <h1>To do List:</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;