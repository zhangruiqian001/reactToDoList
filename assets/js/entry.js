var ReactDOM = require('react-dom');
var React = require('react');
var TodoApp = require('./todoApp.js').default;

ReactDOM.render(
	<TodoApp/>,
	document.getElementById("content")
);