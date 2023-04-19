import axios from "axios";
import { ENDPOINT } from "../constants";
import { getToken } from "../utils";

const instance = axios.create({
  baseURL: ENDPOINT,
  headers: { Authorization: `Bearer ${getToken()}` },
});

export const createTodo = async (payload) => {
  const response = await instance.post("/todos", payload);
  console.log(response);
  return response.data;
};

export const getTodos = async () => {
  const response = await instance.get("/todos");
  console.log(response);
  return response.data;
};
