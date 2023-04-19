import React, { useCallback, useState } from "react";
import { updateTodo } from "../api/todo";
import { useInput } from "../hooks";

export const TodoItem = ({ todoItem, onDelete }) => {
  const [_todo, setTodo] = useState(todoItem);
  const [isEdit, setIsEdit] = useState(false);
  const newTodoInput = useInput(todoItem.todo);

  const { id, todo, isCompleted } = _todo;

  const editTodo = useCallback(
    async ({ todo, isCompleted }) => {
      const newTodo = await updateTodo(id, {
        todo,
        isCompleted,
      });
      setTodo(newTodo);
    },
    [id]
  );

  return (
    <li>
      <label style={{ marginRight: "8px" }}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            editTodo({ todo, isCompleted: e.target.checked });
          }}
        />
        {isEdit ? (
          <input data-testid="modify-input" {...newTodoInput} />
        ) : (
          <span>{todo}</span>
        )}
      </label>

      {!isEdit && (
        <>
          <button
            data-testid="modify-button"
            type="button"
            onClick={() => setIsEdit(true)}
          >
            수정
          </button>
          <button
            data-testid="delete-button"
            type="button"
            onClick={() => onDelete(id)}
          >
            삭제
          </button>
        </>
      )}

      {isEdit && (
        <>
          <button
            data-testid="submit-button"
            onClick={() => {
              editTodo({ todo: newTodoInput.value, isCompleted });
              setIsEdit(false);
            }}
          >
            제출
          </button>
          <button data-testid="cancel-button" onClick={() => setIsEdit(false)}>
            취소
          </button>
        </>
      )}
    </li>
  );
};
