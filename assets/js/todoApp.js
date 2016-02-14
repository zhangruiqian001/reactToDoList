import React from 'react';

var TodoForm = require('./todoForm.js').default;
var TodoList = require('./todoList.js').default;

export default class todoApp extends React.Component {

  render() {
    return (
      <div>
      	Hello, This is a todo app
      	<TodoForm/>
      	<TodoList/>
      </div>
    );
  }
}

