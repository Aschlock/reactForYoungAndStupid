import OrderRow from './OrderRow.js';


export default function OrdersListSmall(props) {

  function generateOrderRows() {
    let generated = [];
    for (let i in '12345123451234512345') {
      generated.push((
        <OrderRow/>
      ))
    }
    return generated;
  }

  return (
    <>
      <div className="card shadow-sm">
        <div className="card-header py-2 d-flex justify-content-between">
          <div>
            <h3 className="text-muted">Заявки</h3>
          </div>
          <div className="align-self-center">
            <a href='#'>Все заявки</a>
          </div>
        </div>

        <div className="card-body py-2" style={{height: '500px', 'overflowY': 'scroll'}}>
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
              {generateOrderRows()}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
