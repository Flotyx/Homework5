import React, {useState} from 'react'

const ULStyle={display:'flex', justifyContent:'center'}
const listStyle={padding:'10px'}

const ToDoListItem = (props)=>{
    const [isDone,setIsDone]=useState(props.item)

    const onDone=()=>{
        if(!props.item.isDone){
            setIsDone(OldObject => OldObject.isDone = true)
            props.onDone(props.item,props.index)
            console.log(props.item)
        }
    }

    const onDelete=()=>{
        props.onDelete(props.item,props.index)
    }

    return(
    <div>
    <ul style={ULStyle}>
    {props.item.isDone === true?
    <li style={listStyle}><del>{props.item.ToDo}</del></li> :   
    <li style={listStyle}>{props.item.ToDo}</li>}
    <div><button onClick={onDone}>Done</button>
    <button onClick={onDelete}>Delete</button></div>
    </ul>
    </div>
    )
    } 

export default ToDoListItem