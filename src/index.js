import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import { applyMiddleware, createStore } from 'redux';
// import Reducers from './Reducers';
// import thunk from 'redux-thunk';
// const store = createStore(Reducers,{},applyMiddleware(thunk))


ReactDOM.render(
  <div>
    <App />
  </div>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
