var React = require('react'),
	{ RouteHandler } = require('react-router');;

var Inbox = React.createClass({
	render() {
		return (
			<div>
				<h2>Inbox</h2>
				<RouteHandler />
			</div>
		);
	}
});

module.exports = Inbox;