import React from 'react';
import ReactDOM from 'react-dom';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }

    this.finishTodo = this.finishTodo.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(todos => {
      this.setState({todos})
    });
  }

  renderTodos(todos) {
    return (
      todos.map((todo, i) => {
        return (
          <tr key={todo.id}>
            <td>
              <input className="form-check-input" type="checkbox" checked={todo.completed} onChange={() => this.finishTodo(i)}/>
            </td>
            <td>
              {todo.id}
            </td>
            <td>
              {todo.title}
            </td>
            <td>
              <a href='#' onClick={() => this.removeTodo(i)}>Удалить</a>
            </td>
          </tr>
        )
      })
    )
  }

  finishTodo(index) {
    let todos = [...this.state.todos];
    todos.splice(index, 1, {...todos[index]});
    todos[index].completed = !todos[index].completed;

    this.setState({
      todos,
    })
  }

  removeTodo(index) {
    let todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos,
    })
  }

  render() {
    return (
      <>
        <h1>Orders</h1>
        <div className="todos-container">
          <table>
            <thead>
              <tr>
                <th>
                  Завершено
                </th>
                <th>
                  Номер задачи
                </th>
                <th>
                  Текст
                </th>
                <th>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.renderTodos(this.state.todos)}
            </tbody>
          </table>
        </div>
      </>
    )
  };
}

export default Orders;
