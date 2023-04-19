import React, { useCallback } from "react";
import { createTodo, deleteTodo } from "../api/todo";
import { TodoAddForm, TodoItem } from "../components";
import { withAuth } from "../hocs/withAuth";
import { useTodoList } from "../hooks/useTodoList";

export const Todo = withAuth(() => {
  const [todoList, setTodoList] = useTodoList();

  /** 새로운 todo를 생성합니다. */
  const onCreate = useCallback(
    async (todo) => {
      const newTodo = await createTodo({ todo });
      setTodoList((prev) => [...prev, newTodo]);
    },
    [setTodoList]
  );

  /** 선택된 id를 가진 todo를 삭제합니다. */
  const onDelete = useCallback(
    (id) => {
      deleteTodo(id);
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    },
    [setTodoList]
  );

  return (
    <div>
      <h2>📌 투두</h2>
      <TodoAddForm onCreate={onCreate} />

      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todoItem={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
});
