import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "../Styles/TodoForm.css"

class TodoForm extends Component {
    state = {
        task: "",
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        
        if(this.state.task === "") {
            alert("Enter a task!")
        } else {
            this.props.addTodo({...this.state, id: uuidv4(), done: false});
        }

        this.setState({
            task: "",
        })
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    render(){
        return(
            <div className="TodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task"></label>
                    <input
                        className="TodoForm-input"
                        type="text"
                        id='task'
                        name='task'
                        value={this.state.task}
                        placeholder="New Task"
                        onChange={this.handleChange}
                    />
                    <button className="TodoForm-button">Submit!</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;