import React from 'react';
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
const { useState, useEffect, useRef, useLayoutEffect } = React;

function Examples() {
  const [count, setCount] = React.useState(0);
  const tooltipRef = useRef();
  const [toast, setToast] = React.useState(false);
  const toastRef = useRef();
  const [toasts, setToasts] = React.useState([]);

  function pushToast() {
    let toastArray = [...toasts];
    let toast = (
      <div className="toast m-3" id={'qwe' + toastArray.length} key={toastArray.length}>
        <div className="toast-header">
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">{(new Date()).toLocaleTimeString()}</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body text-start">
          See? Just like this. {toastArray.length}
        </div>
      </div>
    )

    toastArray.push(toast);
    setToasts(toastArray);
  }

  function handleChange(e) {
    console.log(e.target.value)
  }

  function handleClick() {
    setCount(Math.random());
  }

  useEffect(() => {
      var tooltip = new bootstrap.Tooltip(tooltipRef.current, {
          title: "Каунт!",
          placement: 'right',
          trigger: 'hover'
      })
  }, [])

  useEffect(() => {
    document.title = `${count}`;
  });

  useEffect(() => {
      var myToast = toastRef.current;
      var bsToast = bootstrap.Toast.getInstance(myToast);

      if (!bsToast) {
          bsToast = new bootstrap.Toast(myToast, {autohide: true});
          bsToast.hide();
          setToast(false);
          myToast.addEventListener('hidden.bs.toast', function () {
            setToast(false)
          });
      }
      else {
          toast ? bsToast.show() : bsToast.hide();

      }
  })

  useEffect(() => {
    let toastDOM = document.querySelector(`#qwe${toasts.length - 1}`);
    if (toastDOM && !toastDOM.classList.contains('show')) {
      let toast = new bootstrap.Toast(toastDOM);
      toast.show();

      toastDOM.addEventListener('hidden.bs.toast', function () {
        toastDOM.remove()
      });
    }
  })

  useEffect(() => {
    console.log(document.cookie)
  }, [])

  return (
      <div className="h-100">
        {count}
        <div className="toast-container top-0 end-0 position-absolute">
          {toasts}
        </div>
        <button className="btn btn-info" onClick={pushToast}>
            Push toast
        </button>

        <div>
          <button className="btn btn-info" onClick={handleClick} ref={tooltipRef}>
              Hover for tooltip
          </button>
        </div>

        <button className="btn btn-success" onClick={() => setToast(toast => !toast)}>
             Toast {toast?'hide':'show'}
         </button>

        <div className="toast top-0 end-0 position-absolute m-3" role="alert" aria-live="assertive" aria-atomic="true" ref={toastRef}>
          <div className="toast-header">
            <strong className="me-auto">Bootstrap</strong>
            <small className="text-muted">just now</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body">
            See? Just like this.
          </div>
        </div>

         <div className="toast position-absolute m-4" role="alert" >
             <div className="toast-body">
               Hello, world! This is a toast message.
             </div>
         </div>

        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown button
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>


        /**/
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">
            <h5 id="offcanvasRightLabel">Offcanvas right</h5>
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            ...
          </div>
        </div>
        /**/

        //
        <div className="card shadow-lg h-100 position-absolute top-0 end-0 m-0 m-md-5 col-12 col-md-3 d-none" style={{zIndex: 1, overflowY: 'scroll'}}>
          <div className="card-body">
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Accordion Item #1
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Accordion Item #2
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Accordion Item #3
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        //

      </div>
  );
}

export default Examples;
