import React, { useState } from "react";

import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updatedTodo }) {
  const [edit, setEdit] = useState({ id: null, value: "" });

  const update = (value) => {
    updatedTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={update} />;
  }

  return todos.map((todo, index) => {
    return (
      <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div>
          <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
          <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
        </div>
      </div>
    );
  });
}

export default Todo;
