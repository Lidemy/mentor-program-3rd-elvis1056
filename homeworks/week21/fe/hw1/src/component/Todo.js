/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
    };
    this.check = this.check.bind(this);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.handleEditKeyDown = this.handleEditKeyDown.bind(this);
  }

  handleEditKeyDown(e) {
    const { isEdit } = this.state;
    const { todo, handleEdit } = this.props;
    if (e.key === 'Enter') {
      todo.content = e.target.value;
      handleEdit(todo.id, todo.content);
      this.setState({
        isEdit: !isEdit,
      });
    }
  }

  edit() {
    const { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  }

  check() {
    const { todo, handlecheck } = this.props;
    todo.isChecked = !(todo.isChecked);
    handlecheck(todo.id, todo.isChecked);
  }

  delete() {
    const { todo, deleteTodo } = this.props;
    deleteTodo(todo.id);
  }

  render() {
    const { isEdit } = this.state;
    const { todo } = this.props;
    return (
      <div className="todo">
        {/* eslint-disable-next-line */}
        <label>
          <input className="check" type="checkbox" onChange={this.check} checked={todo.isChecked ? 'checked' : ''} />
        </label>
        <div className={`content ${isEdit ? 'none' : ''}`}>{todo.content}</div>
        <input className={`content_edit ${isEdit ? '' : 'none'}`} onKeyDown={this.handleEditKeyDown} />
        <div className={`content_edit_cancel ${isEdit ? '' : 'none'}`}>取消</div>
        {/* eslint-disable-next-line */}
        <div className="edit" onClick={this.edit}>edit</div>
        {/* eslint-disable-next-line */}
        <div className="delete" onClick={this.delete}>delete</div>
      </div>
    );
  }
}

export default Todo;
