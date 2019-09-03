import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import TodoForm from './Components/TodoForm/TodoForm'
import { todos } from './Components/todos.json'
import TodoList from './Components/TodoList'

class App extends Component {
  //Elimine el constructor para solo quedarme con el state y que el codigo se vea mas limpio
  state = {
    todos
  }
  
  //Cambie a usar Arrow Function en este metodo removeTodo
  //removeTodo eliminar una tarea de la lista de Todos
  removeTodo = (index) => {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
          return i !== index
      })
    })
  }
  
  //Cambie a usar Arrow Functions en este metodo handleAddTodo
  //handleAddTodo agregar una tarea a la lista de Todos
  handleAddTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container" >
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo"/>
              <TodoForm onAddTodo={this.handleAddTodo}/>
            </div>
            <div className="col-md-8">
              <TodoList 
                todos = {this.state.todos}
                removeTodo = {this.removeTodo}
              />
            </div>     
          </div>
        </div>
      </div>
    )
  }
}

export default App
