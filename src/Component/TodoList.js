import React from 'react'
import TodoListItem from'./ToDoListItem'

const TodoList = (props)=>{
  return(
      <div>
          {props.list.map(item => <TodoListItem item = {item} onDelete={props.onDelete} onDone={props.onDone}/>)}
      </div>
  )
}

export default TodoList