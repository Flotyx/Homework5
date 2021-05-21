import React from 'react'
import ToDoApp from './Component/ToDoApp'

var ToDoList=[]

function App(){
    <div>
    <ToDoApp list = {ToDoList}/>
    </div>
}

export default App;



//NOTE OF ToDoAPP
/*
ToDo APP
  -TODOTITLE
  -TODOFORM
  -TODOLIST（todo list是一個array）,所以todo app 那裏會一個todo list
*/

//NOTE OF REACT
//jsx helps to write much easier and cleaner code and jsx is more easier to create the react component

//remember the first letter of the function should be the upperletter because it is the rule of the react . if not, you will have trouble 
//props(function components) and ES6 class is the same view of React

// function Welcome(props){
//     return <h1>Hello,{props.name}</h1>
// }

// class Welcome extends React.Component{
//     render(){
//     return <h1>Hello,{this.props.name}</h1>;
//     }
// }s