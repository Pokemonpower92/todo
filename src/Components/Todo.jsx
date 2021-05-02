import React, { Component } from 'react';
import "../Styles/Todo.css";

class Todo extends Component {
    state = {
        task: this.props.task,
        editing: false
    }

    handleChange = (evt) => {
        this.setState({
        [evt.target.name]: evt.target.value,
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.editTodo({ 
            task: this.state.task, 
            id: this.props.id,
        })
        this.handleEdit();
    }

    handleEdit = () => {
        this.setState({
            editing: !this.state.editing,
        })
    }

    handleDelete = (evt) => {
        evt.preventDefault();
        this.props.removeTodo(this.props.id);
    }

    handleStrike = (evt) => {
        evt.preventDefault();
        this.props.toggleStrike(this.props.id);
    }

    render(){
        const { task } = this.props;
        let body;

        if(this.state.editing){
            body = 
            <div className="Todo-editing">
                    <form onSubmit={this.handleSubmit} className="Todo-editing-content">
                        <input
                            type="text"
                            id='task'
                            name='task'
                            value={this.state.task}
                            onChange={this.handleChange}
                            className="Todo-editing-form"
                        />
                        <div className="Todo-editing-button">
                            <button><i class="fa fa-check" aria-hidden="true"></i></button>
                        </div>
                    </form>
            </div>
        } else {
            body =
            <div className={this.props.done ? "Todo-finished" : "Todo-rendered"}>
                <div className="Todo-rendered-content">
                    <li
                        onClick={this.handleStrike} 
                    >
                        { task }
                    </li>
                    <div className="Todo-rendered-buttons">
                        <button onClick={this.handleEdit} ><i class="fa fa-pen" aria-hidden="true" ></i></button>
                        <button onClick={this.handleDelete} ><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        }
        return body
    }
}

export default Todo;