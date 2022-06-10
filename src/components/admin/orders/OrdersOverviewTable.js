import OrderRow from './OrderRow.js';
import fetchedOrders from '../../../data/orders.js';
import {useState, useEffect} from 'react';


export default function OrdersOverviewTable(props) {
  let [orders, setOrders] = useState([]);
  let [fetchStatus, setFetchStatus] = useState("Инициализация");

  useEffect(() => {
    //Будто бы fetch
    setFetchStatus("Ожидание ответа от сервера")
    let fetchPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(fetchedOrders);
        }, 500);
    })

    fetchPromise.then((result) => {
      setFetchStatus("Готово");
      setOrders(result.map(order => <OrderRow {...order} key={order.id}/>));
    })
  }, [])

  return (
    <>
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-header py-2 d-flex justify-content-between">
            <div>
              <h3 className="text-muted m-0">Заявки</h3>
            </div>
            <div className="align-self-center">
              <a href='#'>Все заявки</a>
            </div>
          </div>

          <div className="card-body py-2" style={{height: '500px', 'overflowY': 'scroll'}}>
            {fetchStatus === "Готово" ? (
              <table className="table table-hover align-middle">
                <thead>
                  <tr className="text-muted">
                    <th className="text-center">
                      Статус
                    </th>
                    <th className="text-nowrap text-center">
                      №
                    </th>
                    <th className="">
                    Сумма
                    </th>
                    <th>
                    Клиент
                    </th>
                    <th className="text-nowrap">
                      Дата создания
                    </th>
                    <th>
                      Заказ
                    </th>
                    <th>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orders}
                </tbody>
              </table>
          ) : (
            <div className="d-flex justify-content-center h-100 align-items-center">
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    </>
  )
}
