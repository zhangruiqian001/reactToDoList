var ReactDOM = require('react-dom');
var React = require('react');
var TodoApp = require('./todoApp.js').default;

var data = [
  {text: "This is one comment"},
  {text: "This is *another* comment"}
];
var content = 'hello world';
ReactDOM.render(
	<TodoApp data={data} />,
	document.getElementById("content")
);