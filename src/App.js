import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import TodoForm from './Components/TodoForm/TodoForm'
import { todos } from './Components/todos.json'
import TodoList from './Components/TodoList'

class App extends Component {
  state = {
    todos
  }
  
  //Cambie a usar Arrow Functions en estos dos metodos removeTodo y handleAddTodo
  removeTodo = index => {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
          return i !== index
      })
    })
  }
  
  handleAddTodo = todo => {
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
