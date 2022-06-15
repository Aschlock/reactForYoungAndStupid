import {Tooltip, Toast, Dropdown} from 'bootstrap/dist/js/bootstrap.esm.min.js';


export default function OrderCard({id, status, cost, currency, created_at, items, user}) {

  function calcStatus() {
    let statusClass;

    switch(status) {
      case "Новая":
        statusClass = "alert-success";
        break;

      case "Просрочена":
        statusClass = "alert-danger";
        break;

      case "В работе":
        statusClass = "alert-primary";
        break;

      default:
        statusClass = "alert-secondary";
        break;
    }

    return (<span className={`badge ${statusClass} align-bottom fw-normal`} style={{width: '84px', lineHeight: 'normal'}}>{status}</span>);
  };

  return (
    <div className="col-12 col-sm-6 col-xl-4 mb-3">
      <div className="card shadow-sm">
        <div className="card-header d-flex justify-content-between text-secondary">
          <b>№ {id}</b>
          <div>
            <small className="mb-0">{created_at.toLocaleDateString()}, </small>
            <small>{created_at.toLocaleTimeString()}</small>
          </div>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush" style={{margin: '-8px 0'}}>
            <li className="list-group-item d-flex justify-content-between px-0">
              Статус
              {calcStatus()}
            </li>
            <li className="list-group-item d-flex justify-content-between px-0">
              Покупатель
              <div>
                {user.lastName} {user.firstName}
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between px-0">
              Сумма
              <div>
              {cost} {currency}
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between px-0">
              Заказ
              <div>
                { items.map(item => (<div>{item.name}</div>)) }
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
