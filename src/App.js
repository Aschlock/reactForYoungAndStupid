import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap";
import React from 'react';

import IndexLayout from './layouts/IndexLayout.js';


function getLayout() {
  let getPage = window.location.pathname.includes('admin') ? '' : <IndexLayout/>;
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
