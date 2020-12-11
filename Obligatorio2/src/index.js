import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/Catalogo/Catalogo';
import firebaseConfig from './firebase-config';
import {FirebaseAppProvider} from 'reactfire';
import Tarjeta from './Components/Cards/Tarjeta';

ReactDOM.render(
  
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={"Conectando con el servidor"}>
        <App />
      </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
