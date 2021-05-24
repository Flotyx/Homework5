import React,{useState } from 'react'
import ToDoTitle from './ToDoTitle'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

var lists = []

//useState就是[state，useState],還有記得上面要引用useState
const TodoApp = (props)=>
{
    const [lists,setLists] = useState([])

    const AddItem=(item)=>
    {
        setLists(Array => [...Array,{"ToDo":item,"finish":false}])
    }

    const DeleteItem = (item,index) =>
    {
        setLists(oldArray =>  oldArray.filter(x=>oldArray.indexOf(x) !== index))
    }

    const DoneItem = (item,index) =>
    {
        console.log(item)
        var array = lists
        array[index].isDone = true
        setLists(array)
        console.log(lists)

    }

    return(
        <div>
            <ToDoTitle />
            <ToDoForm onAdd = {AddItem}/>
            <ToDoList list={lists} onDelete={DeleteItem} onDone = {DoneItem}/>
        </div>
    )
}
////記得這裏寫的是什麽，上面寫的function名字要一樣，不然會出大事！

 export default TodoApp