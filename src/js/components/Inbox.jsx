var React = require('react'),
	{ RouteHandler } = require('react-router'),
	Well = require('./bootstrap/Well.jsx');

var Inbox = React.createClass({
	render() {
		return (
			<Well>
				<h2>Inbox</h2>
				<RouteHandler />
			</Well>
		);
	}
});

module.exports = Inbox;