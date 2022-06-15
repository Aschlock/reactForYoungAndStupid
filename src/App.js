import React from 'react';
import logo from './logo.svg';
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
