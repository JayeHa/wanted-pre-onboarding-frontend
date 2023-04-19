import React from "react";

export const TodoItem = ({ todoItem }) => {
  const { id, todo, isCompleted, userId } = todoItem;

  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{todo}</span>
      </label>
    </li>
  );
};
