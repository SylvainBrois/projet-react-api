import React from 'react';
import ReactDOM from "react-dom"
import App from './App';
import "./styles/index.scss"
import {Provider} from "react-redux";
import {Store} from "./components/Redux";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={Store}>
    <App/>
      </Provider>
  </React.StrictMode>
);
