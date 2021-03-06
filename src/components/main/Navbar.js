export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 shadow-sm w-100" style={{zIndex: 1}}>
      <div className="container">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Главная
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/orders">Задачи</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/catfacts">Кошачьи факты</a>
            </li>
          </ul>
          <div>
            <a className="btn btn-primary py-1 text-white" href="/admin">
              Вход
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
