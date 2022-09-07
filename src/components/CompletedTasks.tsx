import React from 'react'
import CompletedTodo from './CompletedTodo'
import { ITodoItem,todoState } from '../types/types'


const CompletedTasks: React.FC<todoState> = ({todos}) => {
  return (

    <>{todos.map((elem) => {
      if(elem.isFinished === true){
        return (
          <CompletedTodo key={elem.id} elem={elem}/>

        )
      }
    })}
    </>
  )
}

export default CompletedTasks
