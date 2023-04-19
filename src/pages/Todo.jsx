import React from "react";
import { createTodo } from "../api/todo";
import { TodoForm, TodoItem } from "../components";
import { withAuth } from "../hocs/withAuth";
import { useTodoList } from "../hooks/useTodoList";

export const Todo = withAuth(() => {
  const [todoList, setTodoList] = useTodoList();

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
          <TodoItem todoItem={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
});
