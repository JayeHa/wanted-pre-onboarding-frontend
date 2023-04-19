import { useCallback, useEffect, useState } from "react";
import { getTodos } from "../api/todo";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodoList = useCallback(async () => {
    const todos = await getTodos();
    setTodoList(todos);
  }, []);

  useEffect(() => {
    getTodoList();
  }, [getTodoList]);

  return [todoList, setTodoList];
};
