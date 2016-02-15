import React from 'react';

var TodoItem = require('./todoItem.js').default;

export default class todoList extends React.Component {
  render() {
  	var items =this.props.data.map(function(item){
  		return (
  			<TodoItem>{item.text}</TodoItem>
  		);
  	});

    return (
      <div> 
      	{items}
      </div>
    );
  }
}
