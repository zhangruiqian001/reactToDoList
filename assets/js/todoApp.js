import React from 'react';

var TodoForm = require('./todoForm.js').default;
var TodoList = require('./todoList.js').default;

export default class todoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }

  componentDidMount(){
  	$.ajax({
  		url: this.props.url,
  		datatype: 'json',
  		cache: false,
  		success: function (data) {
  			this.setState({data:data});
  		}.bind(this),
  		error: function (xhr,status,err) {
  			console.error(this.props.url, status, err.toString());
  		}.bind(this)
  	});
  }


  render() {
    return (
      <div>
      	<h1>ToDos</h1>
      	<TodoForm/>
      	<TodoList data={this.state.data} />
      </div>
    );
  }
}