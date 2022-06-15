import React from 'react';
import TodoRow from '../components/todo/TodoRow.js';


class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }

    this.finishTodo = this.finishTodo.bind(this);
    this.renderTodos = this.renderTodos.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
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
          <TodoRow completed={todo.completed}
                   id={todo.id}
                   title={todo.title}
                   i={i}
                   onFinishTodo={this.finishTodo}
                   onRemoveTodo={this.removeTodo}
                   key={todo.id}/>
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
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-body">
                  <table className="table table-hover table-bordered">
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
              </div>
            </div>
          </div>
        </div>
      </>
    )
  };
}

export default Orders;
