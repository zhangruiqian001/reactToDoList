import React from 'react';

var TodoForm = require('./todoForm.js').default;
var TodoList = require('./todoList.js').default;

export default class todoApp extends React.Component {

  render() {
    return (
      <div>
      	<h1>ToDos</h1>
      	<TodoForm/>
      	<TodoList data={this.props.data} />
      </div>
    );
  }
}

