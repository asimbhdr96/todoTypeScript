import * as types from "./types";
import * as api from '../api/index'
import { Dispatch } from "redux";
import { todoState,ITodoItem,InputTodoItem } from "../types/types";
export const fetchTodos = ()=> async (dispatch : Dispatch) => {
  try{
    const {data} = await api.getTodos()
      dispatch({
      type : types.FETCH_TODOS,
      payload : data
    })
  }catch(err){
    console.log(err)
  }
}

export const createTodo = (todo:InputTodoItem) => async(dispatch : Dispatch) => {
  try{
    const {data} = await api.addTodo(todo)
    dispatch({
      type : types.CREATE_TODO,
      payload : data,
    })
  }catch(err){
    console.log(err)
  }
}


export const deleteTodo = (id:number) => async (dispatch : Dispatch) => {
  try{
    const {data} = await api.deleteTodo(id)
    console.log('sadfsdf',data)
    dispatch({
      type : types.DELETE_TODO,
      payload : id
    })
  }catch(err){
    console.log(err)
  }
}


export const updateTodo = (id:number,post:ITodoItem) => async (dispatch : Dispatch) => {
  try{
    const {data} = await api.updateTodo(id,post)
    dispatch({
      type : types.UPDATE_TODO,
      payload : data
    })
  }catch(err){
    console.log(err)
  }
}
