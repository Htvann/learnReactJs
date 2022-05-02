import React from "react";
import "../Example/demo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
   state = {
      listTodos: [
         {
            id: "",
            title: "",
         },
      ],
   };
   addNewTodo = (todo) =>{
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
   render() {
      let { listTodos } = this.state;
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
                           <span>
                              {index + 0} - {item.title}
                           </span>
                           <button>Edit</button>
                           <button>Delete</button>
                        </div>
                     );
                  })}
            </div>
         </div>
      );
   }
}
export default ListTodo;
