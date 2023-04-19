import axios from "axios";
import { ENDPOINT } from "../constants";
import { getToken } from "../utils";

const instance = axios.create({
  baseURL: ENDPOINT,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const createTodo = async (payload) => {
  const response = await instance.post("/todos", payload);
  return response.data;
};

export const getTodos = async () => {
  const response = await instance.get("/todos");
  return response.data;
};

export const updateTodo = async (id, payload) => {
  const response = await instance.put(`/todos/${id}`, payload);
  return response.data;
};

export const deleteTodo = async (id) => {
  await instance.delete(`/todos/${id}`);
};
