import logo from './logo.svg';
import './App.css';
import Welcome from './pages/index.js';
import Page404 from './pages/Page404.js';
import Orders from './pages/orders.js';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const залупа = "123";

function getPage() {
  switch(window.location.pathname) {
    case '/':
      return <Welcome name="AAAAAAAAA"/>;

    case '/orders':
      return <Orders/>;

    default:
      return <Page404/>;
  }
}

function App() {
  console.log(window.location)
  return (
    <div className="App">
      {getPage()}
    </div>
  );
}

export default App;
