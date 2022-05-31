import React from "react";
import "../Example/demo.scss";
import AddTodo from "./AddTodo";
import {toast} from 'react-toastify';
import Color from "../HOC/Color";

class ListTodo extends React.Component {
    state = {
        listTodos: [
            {
                id: "",
                title: "Doing homework",
            },
        ],
        editTodo: {}
    };
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast('🦄 Wow so easy!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
    }
    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            return;
        }
        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleOnchangeTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo}
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log(">> check emptyObj", isEmptyObj)
        return (
            <div className="list-todo">
                <AddTodo
                    addNewTodo={this.addNewTodo}
                ></AddTodo>

                <div className="list-todo-content">
                    {listTodos &&
                        listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>
                                             {index + 1} - {item.title}
                                         </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                  {index + 1} - <input
                                                    value={editTodo.title}
                                                    onChange={(event) => this.handleOnchangeTodo(event)}/>
                                             </span> :
                                                <span>
                                                    {index + 1} - {item.title}
                                                </span>
                                            }
                                        </>

                                    }
                                    <button onClick={() => this.handleEditTodo(item)}>
                                        {isEmptyObj === false && editTodo.id === item.id ?
                                            "Save" : "Edit"
                                        }
                                    </button>
                                    <button className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete
                                    </button>
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}

export default Color(ListTodo);