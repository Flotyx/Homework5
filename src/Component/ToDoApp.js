import React,{useState} from 'react'
import ToDoTitle from './ToDoTitle'
import TodoList from './TodoList'
import ToDoForm from './ToDoForm'

const TodoApp = (props)=>{
    const [lists,setLists] = useState([])

    const addItem =(item)=>{
        setLists(Array => [...Array,{"TODO":item,"isDone":false}])
    } 

const removeItem=(item)=>{
    setLists(oldArray => oldArray.filter(x=>x.TODO !== item.TODO))
}

const TodoDone=(item)=>{
        console.log(item)
        var index = lists.findIndex(x => x.TODO = item.TODO)
        var array = lists
        array[index].isDone = true
        setLists(array)
        console.log(lists)
}
   
return (       
<div id="main">         
<ToDoTitle />         
<ToDoForm onAdd = {addItem}/>         
<TodoList list={lists} onDelete={removeItem} onDone = {TodoDone}/>       
</div>     
)
} 

export default TodoApp
