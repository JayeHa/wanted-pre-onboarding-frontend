import React from "react";
import { useInput } from "../hooks";

export const TodoAddForm = ({ onCreate }) => {
  const todoInput = useInput("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onCreate(e.target.todo.value);
      }}
    >
      <input data-testid="new-todo-input" name="todo" {...todoInput} />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
};
