import axios from "axios";
import { ITodoItem,InputTodoItem } from "../types/types";
const apiEndpoint = "http://localhost:3000/todos/";

export const getTodos = async () => await axios.get(apiEndpoint);

export const deleteTodo = async (id:number) =>
  await axios.delete(`${apiEndpoint}${id}`);

export const addTodo = async (data:InputTodoItem) => await axios.post(apiEndpoint, data);

export const updateTodo = async (id:number, updatedTodo:ITodoItem) =>
  await axios.patch(`${apiEndpoint}${id}`, updatedTodo);
