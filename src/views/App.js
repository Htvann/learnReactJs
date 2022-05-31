import "./App.scss";
import ListTodo from "./Todos/ListTodo";
import Home from "./Example/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";

import MyComponent from "./Example/MyComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/listtodo" element={<ListTodo />} />
                    <Route path="/about" element={<MyComponent />} />
                    <Route path="/user" element={<ListUser />} />
                    <Route path="/user/:id" element={<DetailUser />} />
                </Routes>
                <ToastContainer />
            </Router>
        </div>
    );
}

export default App;
