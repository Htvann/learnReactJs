import logo from "./logo.svg";
import "./App.scss";
import ListTodo from "./Todos/ListTodo";
// import MyComponent from "./Example/MyComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>To Do App</p>
        <ListTodo></ListTodo>
        {/* <MyComponent></MyComponent> */}
      </header>
    </div>
  );
}

export default App;
