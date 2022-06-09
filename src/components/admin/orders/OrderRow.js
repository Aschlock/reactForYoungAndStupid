import React from 'react';
import {Tooltip, Toast, Dropdown} from 'bootstrap/dist/js/bootstrap.esm.min.js';


export default function OrderRow({id, status, cost, currency, created_at, items, user}) {
  React.useEffect(() => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl, {html: true})
    })
  }, []);

  function calcStatus() {
    let statusClass;

    switch(status) {
      case "Новая":
        statusClass = "bg-success";
        break;

      case "Просрочена":
        statusClass = "bg-danger";
        break;

      case "В работе":
        statusClass = "bg-primary";
        break;

      default:
        statusClass = "bg-secondary";
        break;
    }

    return (<span className={`badge ${statusClass} mx-2 align-bottom fw-normal`}>{status}</span>);
  };

  function generateServices() {
    if (items.length > 1) {
      let liArr = [];

      items.forEach(item => {
        liArr.push(`<li>${item.name}</li>`);
      })

      let ulItems = `<ul class='m-0 p-0'>${liArr.join('')}</ul>`;
      return (<li><a href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title={ulItems}>+{items.length} позиций</a></li>);
    }
  };

  return (
    <tr>
      <td className="text-center" style={{width: '0%'}}>
        {calcStatus()}
      </td>
      <td className="text-center" style={{width: '5%'}}>
        {id}
      </td>
      <td className="">
        {cost} {currency}
      </td>
      <td>
        <div>
          {user.lastName} {user.firstName}
        </div>
        <small className="text-muted">
          {user.phone}
        </small>
      </td>
      <td className="text-nowrap">
        <div className="text-left">
          <p className="mb-0 text-left">{created_at.toLocaleDateString()}</p>
          <small className="text-muted text-left">{created_at.toLocaleTimeString()}</small>
        </div>
      </td>
      <td>
        <ul className="list-style-none m-0 p-0 order-line">
          <li>Печать фотографий</li>
          {generateServices()}
        </ul>
      </td>
      <td className="text-center" style={{width: '0%'}}>
        <div className="dropdown">
          <a href="#" className="text-black" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots fs-4"></i></a>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#"><i className="bi bi-search me-2"></i> Открыть</a></li>
            <li><a className="dropdown-item" href="#"><i className="bi bi-pencil-fill me-2"></i> Редактировать</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item text-danger" href="#"><i className="bi bi-trash-fill me-2"></i> Удалить</a></li>
          </ul>
        </div>
      </td>
    </tr>
  )
}
