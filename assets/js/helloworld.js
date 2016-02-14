var React = require('react');

class Hello extends React.Component {
	render() {
		return ( 
			<h1> Hello world {this.props.name} !</h1>
		);
	}
}

export default Hello;