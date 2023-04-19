import React, { useState } from "react";
import { updateTodo } from "../api/todo";

export const TodoItem = ({ todoItem }) => {
  const [_todo, setTodo] = useState(todoItem);
  const { id, todo, isCompleted, userId } = _todo;

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={async (e) => {
            const newTodo = await updateTodo(id, {
              todo,
              isCompleted: e.target.checked,
            });
            setTodo(newTodo);
          }}
        />
        <span>{todo}</span>
      </label>
    </li>
  );
};
