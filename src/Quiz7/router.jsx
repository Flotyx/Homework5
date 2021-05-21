import React,{useState} from 'react'
import TodoApp from "../Component/ToDoApp"
import Login from './login'

const Router = ()=>{
    const [isLogin,LoginState] = useState(false)

    const onlogin =(state)=>{
        LoginState(true)
    }

    return (
        <div>
            {isLogin ? <TodoApp/> : <Login onLogin = {onlogin}/>}
        </div>
    )
}

export default Router