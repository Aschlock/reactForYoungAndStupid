export default function OrderRow(props) {

  let status = (<span className="badge bg-secondary mx-2 align-bottom fw-normal">Ожидает</span>);

  return (
    <tr>
      <td className="text-center" style={{width: '0%'}}>
        <span className="badge bg-primary mx-2 align-bottom fw-normal">В работе</span>
      </td>
      <td className="text-center" style={{width: '5%'}}>
        {Math.floor(Math.random() * 100)}
      </td>
      <td className="">
        <b>{Math.floor(Math.random() * 10000) }</b> ₽
      </td>
      <td>
        <div>
          Фамилия Имя
        </div>
        <small className="text-muted">
          +79001112233
        </small>
      </td>
      <td className="text-nowrap">
        <div className="text-left">
          <p className="mb-0 text-left">{(new Date()).toLocaleDateString()}</p>
          <small className="text-muted text-left">{(new Date()).toLocaleTimeString()}</small>
        </div>
      </td>
      <td>
        <ul className="m-0 p-0 order-line">
          <li>Печать фотографий</li>
          <li><a href="#">+3 позиции</a></li>
        </ul>
      </td>
      <td className="text-center" style={{width: '0%'}}>
      <div className="dropdown">
        <a href="#" className="text-black" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots fs-4"></i></a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#"><i className="bi bi-search me-2"></i> Открыть</a></li>
          <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-fill me-2"></i> Редактировать</a></li>
          <li><hr class="dropdown-divider"/></li>
          <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-trash-fill me-2"></i> Удалить</a></li>
        </ul>
      </div>
      </td>
    </tr>
  )
}
