export interface ITodoItem {

  title : string,
  isFinished : boolean,
  id : number,
}

export interface InputTodoItem {

  title : string,
  isFinished : boolean,
}

export type todoState = {
  todos : ITodoItem[]
}


export type Action = {
  type:string,
  payload?: any
}

export interface IRootState {

  todos : todoState
}
