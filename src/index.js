import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.css';
import App from './App';
import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Home from "./pages/home";
// import Blog from "./pages/blog";
// import ContactMe from "./pages/contact-me";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);


