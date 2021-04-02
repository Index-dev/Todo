import React, { Component } from 'react';
import MainFrame from './components/MainFrame';
import Form from './components/Form';
import List from './components/List';


class App extends Component {
  id = 0; checked = false;

  state = {
    input: '',
    todos: []
  }

  changeItem = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  createItem = () => {
    if(this.state.input.length !== 0){
      this.setState({
        input: '',
        todos: this.state.todos.concat({
          id: this.id++,
          text: this.state.input,
          checked: false
        })
      });
    }
    else{
      alert("할 일을 입력하세요!")
    }
  }

  Enterkey = () => {
    if (window.event.keyCode === 13) {
      this.createItem();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    const todos2 = [...todos];

    todos2[index] = { 
      id: todos[index].id,
      text: todos[index].text, 
      checked: !todos[index].checked
    };

    this.setState({
      todos: todos2
    });
  }

  removeItem = (id) => {
    const { todos } = this.state;
    //if(this.state.)
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      changeItem,
      createItem,
      Enterkey,
      handleToggle,
      removeItem
    } = this;

    return (
      <MainFrame form={(
        <Form 
          value={input}
          onKeyPress={Enterkey}
          onChange={changeItem}
          onCreate={createItem}
        />
      )}>
        <List todos={todos} onToggle={handleToggle} onRemove={removeItem}/>
      </MainFrame>
    );
  }
}

export default App;