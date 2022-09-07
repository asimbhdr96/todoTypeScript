import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,fetchTodos,updateTodo } from '../actions/todos'
import { ITodoItem } from '../types/types'

type todoItemProp = {
  elem: ITodoItem
}
const CompletedTodo = ({elem}:todoItemProp) => {
  const dispatch = useDispatch();
  return (
    <div key={elem.id} className="completed">
          <p id="li${todo?.id}"  onClick={() => {
              dispatch<any>(updateTodo(elem.id,{...elem, isFinished : !elem.isFinished}))
            }}>{elem?.title}</p>
          <div id="btn-div">

            <button className="delete-btn" name={`${elem?.id}`} id="deleteBtn" onClick={() => {
                dispatch<any>(deleteTodo(elem.id))
                dispatch<any>(fetchTodos())
              }}>
              Delete
            </button>
          </div>
        </div>
  )
}

export default CompletedTodo
