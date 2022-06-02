import React from 'react';
import {Tooltip, Toast} from 'bootstrap/dist/js/bootstrap.esm.min.js';


const { useState, useEffect, useRef, useLayoutEffect } = React;

function Examples() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(Math.random());
  }

  const tooltipRef = useRef();

  useEffect(() => {
      var tooltip = new Tooltip(tooltipRef.current, {
          title: "Каунт!",
          placement: 'right',
          trigger: 'hover'
      })
  }, [])

  useEffect(() => {
    document.title = `${count}`;
  });

  var [toast, setToast] = React.useState(false);
  const toastRef = useRef();

  useEffect(() => {
      var myToast = toastRef.current;
      var bsToast = Toast.getInstance(myToast);

      if (!bsToast) {
          bsToast = new Toast(myToast, {autohide: true});
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


  var [toasts, setToasts] = React.useState([]);

  useEffect(() => {
    let toastDOM = document.querySelector(`#qwe${toasts.length - 1}`);
    if (toastDOM && !toastDOM.classList.contains('show')) {
      let toast = new Toast(toastDOM);
      toast.show();

      toastDOM.addEventListener('hidden.bs.toast', function () {
        toastDOM.remove()
      });
    }
  })

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

  return (
    <div>
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

    </div>
  );
}

export default Examples;
