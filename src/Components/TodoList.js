import React, { Component } from 'react';

class TodoList extends Component {
    render() {
        return(
            <div className="row">
                { this.props.todos.map((todo, i) => {
                    return (
                        <div className="col-md-4" key={i}>
                            <div className="card mt-4">
                                <div className="card-title text-center">
                                    <h3>{todo.title}</h3>
                                    <span className="badge badge-pill badge-danger ml-2">
                                    {todo.priority}
                                    </span>
                                </div>
                                <div className="card-body">
                                    <p>{todo.description}</p>
                                    <p><mark>{todo.responsible}</mark></p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-danger" onClick={() => this.props.removeTodo(i)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }) 
            }
            </div>
        );
    }
}

export default TodoList;
