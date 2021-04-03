import React, { Component } from 'react';
import Todo from './Todo';

class TodoItemList extends Component {
  componentDidUpdate(e) {
    return this.props.todos !== e.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList = todos.map(
      ({id, text, checked}) => (
        <Todo
          id={id}
          text={text}
          checked={checked}
          onToggle={onToggle}
          onRemove={onRemove}
          key={id}
        />
      )
    );

    return (
      <div>
        {todoList}    
      </div>
    );
  }
}

export default TodoItemList;