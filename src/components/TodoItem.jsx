import React, { useState } from "react";
import { updateTodo } from "../api/todo";

export const TodoItem = ({ todoItem, onDelete }) => {
  const [_todo, setTodo] = useState(todoItem);
  const { id, todo, isCompleted, userId } = _todo;

  return (
    <li>
      <label style={{ marginRight: "8px" }}>
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

      <button data-testid="modify-button" type="button">
        수정
      </button>
      <button
        data-testid="delete-button"
        type="button"
        onClick={() => onDelete(id)}
      >
        삭제
      </button>
    </li>
  );
};
