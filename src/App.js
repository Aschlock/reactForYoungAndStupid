import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
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
