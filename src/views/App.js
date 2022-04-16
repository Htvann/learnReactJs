import logo from './logo.svg';
import './App.scss';
// import MyComponet from './Example/MyComponet';
import MyForm from './Example/MyForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <MyComponet/> */}
        <MyForm/>
      </header>
    </div>
  );
}

export default App;
