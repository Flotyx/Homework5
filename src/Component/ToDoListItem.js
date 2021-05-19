import React, {useState} from 'react'

const formStyle={display:'flex', justifyContent:'center'}
const listStyle={padding:'10px'}

const TodoListItem = (props)=>{
    const [isDone,setIsDone]=useState(props.item)

    const onDone=()=>{
        if(!props.item.isDone){
            setIsDone(OldObject => OldObject.isDone = true)
            props.onDone(props.item)
        }
    }

    const onDelete=()=>{
        props.onDelete(props.item)
    }

    return(
    <div>
    <ul style={formStyle}>
    {props.item.isDone === true?
    <li style={listStyle}><del>{props.item.TODO}</del></li> :   
    <li style={listStyle}>{props.item.TODO}</li>}
    <div><button onClick={onDone}>Done</button>
    <button onClick={onDelete}>Delete</button></div>
    </ul>
    </div>
    )
    } 

export default TodoListItem