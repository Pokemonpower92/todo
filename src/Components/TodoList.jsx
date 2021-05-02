import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

import '../Styles/TodoList.css';

class TodoList extends Component {
    state = {
        todos: [],
    }

    // Adds a todo to the exisiting state.
    addTodo = (todo) => {

        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    // Removes todo with id 'id'
    removeTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id),
        })
    }

    // Changes todo with id editedTodo.id to editedTodo.
    editTodo = (editedTodo) => {
        let newTodos = [...this.state.todos];

        for(let todo of newTodos){
            if(todo.id === editedTodo.id){
                todo.task = editedTodo.task;
                break;
            }
        }

        this.setState({
            todos: [...newTodos],
        })
    }

    // This toggles the todo as being 'done'
    toggleStrike = (id) => {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id){
                return { ...todo, done: !todo.done};
            }
            else {
                return todo;
            }
        })

        this.setState({
            todos: updatedTodos,
        })
    }

    render(){
        return(
            <div className="TodoList">
                <h1 className="TodoList-title">Todo List</h1>
                <ul className="TodoList-list">
                    {this.state.todos.map(td => (
                        <Todo
                            key={td.id}
                            id={td.id}
                            task={td.task}
                            done={td.done}
                            removeTodo={this.removeTodo} 
                            editTodo={this.editTodo}
                            toggleStrike={this.toggleStrike}
                        />
                    ))}
                </ul>
                <div className="TodoList-form">
                    <TodoForm addTodo={this.addTodo} />
                </div>
            </div>
        );
    }
}

export default TodoList;