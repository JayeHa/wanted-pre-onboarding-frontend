import React from "react";
import { useInput } from "../hooks";

export const TodoForm = ({ onSubmit }) => {
  const todoInput = useInput("");

  return (
    <form onSubmit={onSubmit}>
      <input data-testid="new-todo-input" name="todo" {...todoInput} />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
};
