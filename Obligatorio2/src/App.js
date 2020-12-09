import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import Login from './Components/Login';
import Menu from './Components/Menu/Menu';
import Contacto from './Components/Contacto/Contacto';
import Portal from './Components/Portal';
import Tarjeta from './Components/Tarjeta';
import Home from './Components/Inicio/Home';

function App(){
  const FireApp = useFirebaseApp();

  return(
    <Router>
      <div className="App">
        <Menu />
        <Switch>
            <Route path='/Inicio' exact ><Portal /> </Route>
            <Route path='/Catalogo' exact ><Home /> </Route>
            <Route path='/Contacto' exact ><Contacto /> </Route>
            <Route path="/"><Portal /></Route>
        </Switch>
      </div>
    </Router>
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
