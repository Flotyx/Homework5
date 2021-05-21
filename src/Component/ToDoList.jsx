import React from 'react'
import ToDoListItem from'./ToDoListItem'

const ToDoList = (props)=>
{
  return(
      <div>
          {props.list.map(item => <ToDoListItem item = {item} Delete={props.Delete} Done={props.Done}/>)}
      </div>
  )
}
//記得這裏寫的是什麽，item哪裏寫的function名字要一樣，不然會出大事！
//因爲名字不一樣，你prop的function就會不等於你要用的那個function了
export default ToDoList