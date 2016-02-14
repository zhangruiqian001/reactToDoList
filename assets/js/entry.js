var ReactDOM = require('react-dom');
var React = require('react');
var Hello = require('./helloworld.js').default;

ReactDOM.render(
	<Hello name="Richard" />,
	document.getElementById("content")
);