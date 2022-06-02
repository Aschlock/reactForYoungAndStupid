import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from '../pages/index.js';
import Page404 from '../pages/Page404.js';
import Orders from '../pages/orders.js';
import Examples from '../pages/Examples.js';
import Navbar from '../components/main/Navbar.js'

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

export default function IndexLayout() {
  return (
    <>
      <Navbar/>
      {getPage()}
    </>
  )
};
