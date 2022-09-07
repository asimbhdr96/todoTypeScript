import React from 'react'

import ActiveTodo from './ActiveTodo'
import {todoState} from '../types/types'



const ActiveTasks: React.FC<todoState> = (props): JSX.Element => {


  return (

      <>
      {props.todos?.map((elem) => {
        if(elem.isFinished === false){
          return (

          <ActiveTodo key={elem.id} elem={elem}/>
          )
        }
      })}
      </>




  )
}

export default ActiveTasks
