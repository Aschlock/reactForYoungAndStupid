import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/custom_bs.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from 'react';

import IndexLayout from './layouts/IndexLayout.js';
import AdminLayout from './layouts/AdminLayout.js';


function getLayout() {
  let getPage = window.location.pathname.includes('admin') ? <AdminLayout/> : <IndexLayout/>;
  console.log(window)
  return getPage;
}

function App() {
  return (
    <div className="App">
      {getLayout()}
    </div>
  );
}

export default App;
