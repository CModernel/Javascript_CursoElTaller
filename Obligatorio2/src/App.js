import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Inicio/Home';
import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import Login from './Components/Login';

function App(){
  const FireApp = useFirebaseApp();

  return(
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;

/*
function App(){
  return(
    <BrowserRouter>
      <div className="App">
        <Menu />

      </div>
    </BrowserRouter>
  );
}

export default App;
*/

/*
function App(){
  return (
    <div> 
      <Home />
    </div>
  );
}
export default App;

*/

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
