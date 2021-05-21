import React ,{useState  }from 'react'

const ulStyle={display:'flex',listStyle:'square',justifyContent:'flex-start'}
const listStlye={padding:'10px'}
const btnStyle={color:"blue"}

const ToDoListItem = (props)=>
{
    const [finish,setFinish]=useState(props.item)
    
    const Done =()=>{
        if(!props.item.finish){
                setFinish(oldObj => oldObj.finish = true)
                props.Done(props.item)
            }
        }

    const Delete =()=>
    {
        props.Delete(props.item)
    }

    return(
        <div >
           <ul style={ulStyle}>
           {props.item.finish === true ?  
           <li style={listStlye}><del>{props.item.ToDo}</del></li> :   
            <li style={listStlye}>{props.item.ToDo}</li>}
            <div><button onClick={Done} style={btnStyle}>Done</button>
            <button onClick={Delete} style={btnStyle}>Delete</button></div>
           </ul>
        </div>
    )
}

export default ToDoListItem