import React from 'react';
import ReactDOM from 'react-dom';
import CatFacts from '../pages/CatFacts.js';
import Page404 from '../pages/Page404.js';
import Orders from '../pages/orders.js';
import Examples from '../pages/Examples.js';
import MainPage from '../pages/main/MainPage.js';
import Navbar from '../components/main/Navbar.js'
import Footer from '../components/main/Footer.js'

function getPage() {
  switch(window.location.pathname) {
    case '/':
      return <MainPage/>;

    case '/catfacts':
      return <CatFacts name="нейм"/>;

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
      <Footer/>
    </>
  )
};
