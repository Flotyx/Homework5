import TodoApp from './components/ToDoApp'
var TodoList = []
function App() {
    return ( 
      <div>
        <TodoApp list={TodoList}/>
      </div>
    );
}
export default App;
