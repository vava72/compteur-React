import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App titre="Gestion de compteurs à l'aide de composants classe REACT" onClick={() => console.log("coucou")} onStop={() => console.log("coucou2")}/>
  </React.StrictMode>
);

