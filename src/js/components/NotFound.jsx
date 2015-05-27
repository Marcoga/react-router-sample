var React = require('react'),
	Well = require('./bootstrap/Well.jsx');

var NotFound = React.createClass({

	render() {
		return (
			<Well>
				<h2>Not Found</h2>
			</Well>
		);
	}

});

module.exports = NotFound;