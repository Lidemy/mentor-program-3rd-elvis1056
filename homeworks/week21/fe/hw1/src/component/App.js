/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import Title from './Title';
import Todo from './Todo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [], // 所有的 todo
      newTodo: '',
      filter: 'All',
    };
    this.id = Number(1);
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handlecheck = this.handlecheck.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.addTodoByEnter = this.addTodoByEnter.bind(this);
    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    const todoData = window.localStorage.getItem('todoData');
    if (todoData && todoData !== '[]') {
      const oldTodos = JSON.parse(todoData);
      this.setState({
        todos: oldTodos,
      });
      this.id = oldTodos[oldTodos.length - 1].id + 1;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todos !== prevState.todos) {
      window.localStorage.setItem('todoData', JSON.stringify(prevState.todos));
    }
  }

  filter(e) {
    // eslint-disable-next-line
    let filter = '';
    if (e.target.innerText === 'All') {
      filter = 'All';
    } else if (e.target.innerText === 'completed') {
      filter = 'completed';
    } else if (e.target.innerText === 'uncompleted') {
      filter = 'uncompleted';
    }
    this.setState({
      filter: e.target.innerText,
    });
  }

  handleChange(e) {
    this.setState({
      newTodo: e.target.value,
    });
  }

  addTodoByEnter(e) {
    if (e.key === 'Enter') {
      const { todos, newTodo } = this.state;
      this.setState({
        todos: [...todos, {
          id: this.id,
          isChecked: false,
          content: newTodo,
        }],
        newTodo: '',
      });
      this.id += 1;
    }
  }

  addTodo() {
    const { todos, newTodo } = this.state;
    this.setState({
      todos: [...todos, {
        id: this.id,
        isChecked: false,
        content: newTodo,
      }],
      newTodo: '',
    });
    this.id += 1;
  }

  deleteTodo(id) {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id),
    });
  }

  handlecheck(id, isChecked) {
    const { todos } = this.state;
    const createNewTodos = [...todos];
    const newTodo = createNewTodos.filter(todo => todo.id === id);
    newTodo.isChecked = isChecked;
    this.setState({
      todos: createNewTodos,
    });
  }

  handleEdit(id, editContent) {
    const { todos } = this.state;
    const createNewTodos = [...todos];
    const newTodo = createNewTodos.filter(todo => todo.id === id);
    newTodo.content = editContent;
    this.setState({
      todos: createNewTodos,
    });
  }

  render() {
    const { todos, newTodo, filter } = this.state;
    return (
      <div className="container">
        <Title />
        <div className="add_item">
          <input className="add_todo" type="text" placeholder="Type your Todo at here" onKeyDown={this.addTodoByEnter} value={newTodo} onChange={this.handleChange} />
          <button type="button" className="add_todo_btn" onClick={this.addTodo}>Add Todo</button>
        </div>
        <div className="filters">
          <div className="filter" onClick={this.filter} onKeyDown={this.filter}>All</div>
          <div className="filter" onClick={this.filter} onKeyDown={this.filter}>completed</div>
          <div className="filter" onClick={this.filter} onKeyDown={this.filter}>uncompleted</div>
        </div>
        <div className="todos">
          {todos
            .filter(todo => (filter === 'completed' ? todo.isChecked === true : todo))
            .filter(todo => (filter === 'uncompleted' ? todo.isChecked === false : todo))
            .map(todo => (
              <Todo
                key={todo.id}
                todo={todo}
                deleteTodo={this.deleteTodo}
                handlecheck={this.handlecheck}
                handleEdit={this.handleEdit}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default App;
