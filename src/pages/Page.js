import React from 'react';
import {Tooltip} from 'bootstrap/dist/js/bootstrap.esm.min.js';


const { useState, useEffect, useRef, useLayoutEffect } = React;

function Page() {
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

  return (
    <div>
      {count}
      <div>
        <button className="btn btn-info" onClick={handleClick} ref={tooltipRef}>
            Hover for tooltip
        </button>
      </div>
    </div>
  );
}

export default Page;
