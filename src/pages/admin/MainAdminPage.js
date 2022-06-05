import React from 'react';
import ReactDOM from 'react-dom';
import OrderRow from '../../components/admin/orders/OrderRow.js';
import OrdersListSmall from '../../components/admin/orders/OrdersListSmall.js';
import {Popover} from 'bootstrap';


export default function MainAdminPage() {

  function generateStatCards() {
    let generated = [];
    let objects = [
      {
        title: 'Новые заявки',
        count: 12,
        icon: 'bi-box-seam',
        status: 'text-success',
        sign: '+'
      },
      {
        title: 'Заявки в работе',
        count: 24,
        icon: 'bi-check-lg',
        status: 'text-muted',
        sign: ''
      },
      {
        title: 'Просроченные заявки',
        count: 2,
        icon: 'bi-exclamation-circle',
        status: 'text-danger',
        sign: '',
      },
      {
        title: 'Новые клиенты',
        count: 3,
        icon: 'bi-people-fill',
        status: 'text-success',
        sign: '+'
      },
    ]

    objects.forEach(element => {
      generated.push((
        <div className="col-3">
          <div className="card shadow-sm">
            <div className="card-body py-2 d-flex justify-content-between">
              <div>
                <div className="text-muted">{element.title}</div>
                <p className={"h3 " + element.status}><span className="font-weight-bold">{element.sign}{element.count}</span></p>
              </div>
              <div>
                <i className={"bi fs-1 text-muted " + element.icon}></i>
              </div>
            </div>
          </div>
        </div>
      ))
    })

    return generated
  }

  function generateEmployeeStat() {
    let generated = [];
    let checkSvg = (<svg data-v-008b4880="" viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="check" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi-check task-check b-icon bi"><g data-v-008b4880=""><path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"></path></g></svg>);
    let objects = [
      {
        employee: {
          name: 'Иванов И. И.'
        },
        current: 95,
        goal: 100
      },
      {
        employee: {
          name: 'Сидоров С. А.'
        },
        current: 201,
        goal: 100
      },
      {
        employee: {
          name: 'Петров С. Ф.'
        },
        current: 50,
        goal: 100
      },
      {
        employee: {
          name: 'Ситров Я. З.'
        },
        current: 3,
        goal: 100
      },
    ]

    objects.forEach(element => {
      generated.push((

          <div className="col-3">
            <div className="card shadow-sm">
              <div className="card-body task-body py-2 d-flex">
                <div className="me-3 position-relative">
                  {element.current >= element.goal? checkSvg : ''}
                  <svg width="64px" height="64px" viewBox="0 0 42 42" class="donut" style={{transform: 'rotate(-90deg)'}}>
                  <circle cx="21" cy="21" r="15.91549430918954" fill="#fff" class="donut-hole">
                  </circle>
                  <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="whitesmoke" stroke-width="3" class="donut-ring">
                  </circle>
                  <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#228cdb" stroke-width="3" stroke-dasharray={element.current + ' ' + (100 - element.current)} stroke-dashoffset="0" class="donut-segment"></circle>
                  </svg>
                </div>

                <div>
                  <h5 className="mb-0">
                    {element.employee.name}
                  </h5>
                  <p>
                    {element.current}/{element.goal}
                  </p>
                </div>
              </div>
            </div>
          </div>

      ))
    })

    return generated
  }

  React.useEffect(() => {
    // var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    // var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    //   return new Popover(popoverTriggerEl)
    // })

    // <button type="button"
    // class="btn btn-lg btn-danger"
    // data-bs-toggle="popover"
    // title="Popover title"
    // data-bs-placement="bottom"
    // data-bs-html="true"
    // data-bs-content="<ul class='m-0'><li>1 </li><li>2</li><li>3 </li></ul>">Click to toggle popover</button>
  }, [])

  return (
    <>
      <div className="container mt-3 mb-3">
        <div className="row">

          <div className="d-flex justify-content-between">
            <h1>Dashboard</h1>
            <div>
              <button className="btn btn-primary text-white">Кнопка!</button>
            </div>
          </div>
          <div>
            <hr className="mt-0"/>
          </div>

          {generateStatCards()}
        </div>
      </div>


      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col-12">
            <OrdersListSmall/>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h2>
              Выполнение плана
            </h2>
          </div>
        </div>
        <div className="row mb-3">
          {generateEmployeeStat()}
        </div>
      </div>
    </>
  )
}
