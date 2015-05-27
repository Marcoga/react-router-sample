var React = require('react'),
	{ RouteHandler } = require('react-router');

var MessageBody = React.createClass({
	render() {
		return(
			<div>
				<h4>This is a MessageBody</h4>
			</div>
		);
	}
});

var Message = React.createClass({
	render() {
		return(
			<div>
				<h3>This is Message: { this.props.params.id }</h3>
				<RouteHandler />
			</div>
		);
	}
});

module.exports = {
	Message: Message,
	MessageBody: MessageBody
};