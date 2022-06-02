import React from 'react';
import ReactDOM from 'react-dom';


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 shadow-sm">
    <div className="container">
      <a className="navbar-brand" href="/">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">
              <i class="bi bi-bookmark-fill me-2"></i>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/orders">Todos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="/orders">Todos</a>
          </li>
        </ul>
        <div>
          <a className="btn btn-primary py-1" href="#">
            <i class="bi bi-person-fill"></i> Вход
          </a>
        </div>
      </div>
    </div>
  </nav>
  )
}
