import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoList from './todo/todo-list';

class App extends Component {
  render() {
    return (
      <div className="contailer-fluid">
        <div className="row">
          <div className="col">
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
