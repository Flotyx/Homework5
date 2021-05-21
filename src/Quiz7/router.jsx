import React,{useState} from 'react'
import ToDoApp from "../Component/ToDoApp"
import Login from './login'

const Router = ()=>
{
    const [logining,setLogining] = useState(false)

    const islogin =(state)=>
    {
        setLogining(true)
    }

    return (
        <div>
            {logining ? <ToDoApp/> : <Login onLogin = {islogin}/>}
        </div>
    )
}

export default Router