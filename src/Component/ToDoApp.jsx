import React,{useState } from 'react'
import ToDoTitle from './ToDoTitle'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

//useState就是[state，useState],還有記得上面要引用useState
const TodoApp = (props)=>
{
    const [record,setRecord] = useState([])

    const AddItem=(item)=>
    {
        setRecord(oldArray => [...oldArray,{"ToDo":item,"finish":false}])
    }

    const DeleteItem = (item) =>
    {
        setRecord(oldArray => oldArray.filter(x=>x.ToDo !== item.ToDo))
    }

    const DoneItem = (item) =>
    {
        console.log(item)
        var data = record.findIndex(x => x.ToDo === item.ToDo)
        var arr = record
        arr[data].finish = true
        setRecord(arr)
        console.log(record)

    }

    return(
        <div>
            <ToDoTitle />
            <ToDoForm onAdd = {AddItem}/>
            <ToDoList list={record} Delete={DeleteItem} Done = {DoneItem}/>
        </div>
    )
}
////記得這裏寫的是什麽，上面寫的function名字要一樣，不然會出大事！

 export default TodoApp