import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,fetchTodos,updateTodo} from '../actions/todos'
import {ITodoItem} from '../types/types'
type todoItemProp = {
  elem: ITodoItem
}
const ActiveTodo = ({elem}:todoItemProp) => {
  const [editClicked,setEditClicked] = useState(false)
  const [data,setData] = useState(elem.title);
  const dispatch = useDispatch();


  return (
    <div key={elem.id} className="active">
            {editClicked ? <input value={data} onChange={(e) => setData(e.target.value)}/> : <p id="li${todo?.id}" onClick={() => {
              dispatch<any>(updateTodo(elem.id,{...elem, isFinished : !elem.isFinished}))
            }}>{elem?.title}</p>}

            <div id="btn-div">
              {!editClicked ? <button className="edit-btn" name={`${elem?.id}`} id="editBtn" onClick={() => setEditClicked(!editClicked)}>
                Edit
              </button> : <button className="edit-btn" name={`${elem?.id}`} id="editBtn" onClick={() => {
                dispatch<any>(updateTodo(elem.id,{...elem, title : data}))
                setEditClicked(!editClicked)
              }}>
                Submit
              </button>}

              <button className="delete-btn" name={`${elem?.id}`} id="deleteBtn" onClick={() => {
                dispatch<any>(deleteTodo(elem.id))
                // dispatch(fetchTodos())
              }}>
                Delete
              </button>
            </div>
          </div>
  )
}

export default ActiveTodo
