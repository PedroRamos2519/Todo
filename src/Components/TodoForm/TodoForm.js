import React, { Component } from 'react'

class TodoForm extends Component {
  state = {
    title: '',
    responsible: '',
    description: '',
    priority: 'low'
  }
  
  //Cambie esta function por Arrow Fuction
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onAddTodo(this.state)
  }

  //Cambie esta function por Arrow Fuction
  handleInputChange = (e) => {
    const {value, name} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Responsible"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              value={this.state.priority}
              onChange={this.handleInputChange}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }
}

export default TodoForm