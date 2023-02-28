import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import App from './App';
import store from "./store/store";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <Router> */}
        {/* <Route path="/" exact component={App} /> */}
    {/* </Router> */}
    <App></App>
  </Provider>
);
