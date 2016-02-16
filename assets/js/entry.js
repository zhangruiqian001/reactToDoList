var ReactDOM = require('react-dom');
var React = require('react');
var TodoApp = require('./todoApp.js').default;

var content = 'hello world';
ReactDOM.render(
	<TodoApp url='/api/todos' />,
	document.getElementById("content")
);