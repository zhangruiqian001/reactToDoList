import React from 'react';

var TodoItem = require('./todoItem.js').default;

export default class todoList extends React.Component {
  render() {
    return (
      <div> 
      	I am a todo list
      	<TodoItem/>

      </div>
    );
  }
}
