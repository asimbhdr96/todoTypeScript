import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import ActiveTasks from './components/ActiveTasks';
import CompletedTasks from './components/CompletedTasks';
import { useSelector,useDispatch } from 'react-redux';
import { ITodoItem,todoState,InputTodoItem,IRootState} from './types/types';
import {fetchTodos,createTodo} from './actions/todos'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((state: IRootState) => state.todos)

  const [newTodo, setnewTodo] = useState<InputTodoItem>({
    title : '',
    isFinished : false,
  })

  useEffect(() => {
    dispatch<any>(fetchTodos())
  },[])


  const handleSubmit = () => {
    dispatch<any>(createTodo(newTodo))
    setnewTodo({
      title : '',
      isFinished : false,
    })
  }

  return (
    <div>
      <header className="top-header"><h1>ToDo List</h1>

      </header>
    <main className="main-container">
      <form className="input-container">
        <input className="todo-input" type="text" placeholder="Enter your Todo" value={newTodo.title} onChange={(e) => setnewTodo(prevState => ( {
          ...prevState,
          title : e.target.value
        }))}/>
      </form>
      <button type="submit" className="btn-submit" onClick={handleSubmit}>Submit</button>

    </main>
    <section className="tasks-container">


    <div className="active-tasks-container">
       <ActiveTasks todos = {todoList.todos} />
    </div>
    <div className="completed-tasks-container">
       <CompletedTasks todos = {todoList.todos}/>
    </div>





    </section></div>
  )
}

export default App;
