import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import MyComponent from "./Example/MyComponent";
function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <MyComponent></MyComponent> */}
            <p>Welcome to List Todo</p>
            <ListTodo></ListTodo>
         </header>
         <ToastContainer />
      </div>
   );
}

export default App;
