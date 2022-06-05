import React from 'react';
import ReactDOM from 'react-dom';
import MainAdminPage from '../pages/admin/MainAdminPage.js';
import Page404 from '../pages/Page404.js';


function getPage() {
  switch(window.location.pathname) {
    case '/admin':
      return <MainAdminPage/>;

    default:
      return <Page404/>;
  }
}

export default function AdminLayout() {
  return (
    <>
      {getPage()}
    </>
  )
};
