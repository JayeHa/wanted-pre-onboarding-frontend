import React, { useCallback } from "react";
import { createTodo, deleteTodo } from "../api/todo";
import { TodoForm, TodoItem } from "../components";
import { withAuth } from "../hocs/withAuth";
import { useTodoList } from "../hooks/useTodoList";

export const Todo = withAuth(() => {
  const [todoList, setTodoList] = useTodoList();

  const onDelete = useCallback(
    (id) => {
      deleteTodo(id);
      setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    },
    [setTodoList]
  );

  return (
    <div>
      <TodoForm
        onSubmit={async (e) => {
          e.preventDefault();
          const newTodo = await createTodo({ todo: e.target.todo.value });
          setTodoList((prev) => [...prev, newTodo]);
        }}
      />

      <ul>
        {todoList.map((todo) => (
          <TodoItem key={todo.id} todoItem={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
});
