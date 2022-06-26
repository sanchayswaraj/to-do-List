import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import uuid from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    task1: "",
    completed: false
  });

  function handleTaskInputChange(e) {
   
    setTodo({ ...todo, task: e.target.value });
  }

  function handleTaskInputChange1(e) {
   
    setTodo({ ...todo, task1: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault(); 
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <TextField
        label="Task"
        type="text"
        name="task"
        value={todo.task}
        onChange={handleTaskInputChange}
      />

<TextField
        label="Deadline"
        type="Text"
        name="task1"
        value={todo.task1}
        onChange={handleTaskInputChange1}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default TodoForm;
