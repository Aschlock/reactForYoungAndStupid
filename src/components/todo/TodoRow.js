import React from 'react';
import ReactDOM from 'react-dom';

export default function TodoRow(props) {

  function handleFinish(e) {
    props.onFinishTodo(props.i);
  }

  function handleRemove() {
    props.onRemoveTodo(props.i);
  }

  return (
    <tr>
      <td>
        <input className="form-check-input" type="checkbox" checked={props.completed} onChange={handleFinish}/>
      </td>
      <td>
        {props.id}
      </td>
      <td>
        {props.title}
      </td>
      <td>
        <a href='#' onClick={handleRemove}>Удалить</a>
      </td>
    </tr>
  )
}
