import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

const todos = [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor(){
   super();
   this.state = {
     todos:todos
   }
 }
 
 
 
  addItem = (taskName)=>{
    console.log(taskName)
    this.setState({
      todos:[...this.state.todos, {
        task:taskName,
        id: this.state.todos.length,
        completed: false
        
      }]
    })
    console.log(this.state.todos)
  }

  toggleItem = (id)=>{
    const newTask = this.state.todos.map(item=>{
      if (item.id === id) {
        return({
          ...item,completed: !item.completed
        })}
        else {
          return item
        }
    })
    this.setState({
      todos:newTask
    })
  }
  
  clear = e =>{
    this.setState({
      todos: this.state.todos.filter(item => (!item.completed))
    })
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm  addItem={this.addItem}/>
        </div>
        <TodoList clear={this.clear} toggleItem={this.toggleItem} todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
