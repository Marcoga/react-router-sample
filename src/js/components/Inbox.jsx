var React = require('react'),
	Authentication = require('../mixins/Authentication.js'),
	{ RouteHandler } = require('react-router'),
	Well = require('./bootstrap/Well.jsx');

var Inbox = React.createClass({
	mixins: [Authentication],

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