import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useFirebaseApp } from 'reactfire';
import Login from './Components/Login2';
import Menu from './Components/Menu/Menu';
import Contacto from './Components/Contacto/Contacto';
import Portal from './Components/LoginRegistro/Portal';
import Tarjeta from './Components/Cards/Tarjeta';
import Home from './Components/Catalogo/Catalogo';

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