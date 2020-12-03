import React, { useEffect, useRef, useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const focus = useRef(null);

  useEffect(() => {
    focus.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input,
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input type="text" placeholder="Add to do" value={input} name="text" className="todo-input edit" onChange={handleChange} ref={focus} />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input type="text" placeholder="Add to do" value={input} name="text" className="todo-input" onChange={handleChange} ref={focus} />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
