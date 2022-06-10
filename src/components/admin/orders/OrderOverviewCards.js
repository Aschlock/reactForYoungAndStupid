import fetchedOrders from '../../../data/orders.js';
import {useState, useEffect} from 'react';
import OrderCard from './OrderCard.js';


export default function OrderOverviewCards() {
  let [cards, setCards] = useState([]);
  console.log(fetchedOrders)
  useEffect(() => {
    //Будто бы fetch
    let fetchPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(fetchedOrders);
        }, 500);
    })

    fetchPromise.then((result) => {
      setCards(result.map(order => <OrderCard {...order} key={order.id}/>));
    })
  }, [])

  return (
    <>
      <div className="col-12 d-flex justify-content-between mb-2">
        <div>
          <h3>Заявки</h3>
        </div>
        <div className="align-self-center">
          <a href='#'>Все заявки</a>
        </div>
      </div>
      {cards}
    </>
  )
}
