import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap";
import React from 'react';

import Welcome from './pages/index.js';
import Page404 from './pages/Page404.js';
import Orders from './pages/orders.js';
import Examples from './pages/Examples.js';



function getPage() {
  switch(window.location.pathname) {
    case '/':
      return <Welcome name="AAAAAAAAA"/>;

    case '/orders':
      return <Orders/>;

    case '/examples':
      return <Examples/>;

    default:
      return <Page404/>;
  }
}



function App() {
  return (
    <div className="App">
      {getPage()}
    </div>
  );
}

export default App;
