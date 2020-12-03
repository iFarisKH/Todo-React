import React, { useState } from "react";

import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.test)) {
      return;
    }

    setTodos([todo, ...todos]);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
  };

  const updatedTodo = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.test)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  return (
    <div>
      <h1>What is the plan today ?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodo={updatedTodo} />
    </div>
  );
}

export default TodoList;
