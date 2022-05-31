import React, { Component } from "react";
import { toast } from 'react-toastify';
export default class AddTodo extends Component {
   state = {
      title: "",
   };
   handleOnchangeTitle = (event) => {
      this.setState({
         title: event.target.value,
      });
   };
   handleClickAdd = () => {
       if(!this.state.title){
        toast.error('🦄 Missing !', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            return;
       }
      let todo = {
         id: Math.floor(Math.random() * 1001),
         title: this.state.title,
      };
      this.props.addNewTodo(todo);
      this.setState({
          title: ''
      })
   };
   render() {
      let { title } = this.state;

      return (
         <>
            <div className="add-todo">
               <input
                  type="text"
                  value={title}
                  onChange={(event) => this.handleOnchangeTitle(event)}
               />
               <button type="button" onClick={() => this.handleClickAdd()}>
                  Add
               </button>
            </div>
         </>
      );
   }
}