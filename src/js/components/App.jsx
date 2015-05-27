var React = require('react'),
	{ RouteHandler } = require('react-router');

var App = React.createClass({
	render() {
		return (
			<div className='container'>
				<h1>App</h1>
				<ul className='list-group'>
					<li className='list-group-item'><a href='#/login'>Login</a></li>
					<li className='list-group-item'><a href='#/logout'>Logout</a></li>
					<li className='list-group-item'><a href='#/dashboard'>Dashboard</a></li>
					<li className='list-group-item'><a href='#/about'>About</a></li>
					<li className='list-group-item'><a href='#/inbox'>Inbox</a></li>
					<li className='list-group-item'><a href='#/inbox/message/2'>Message 2</a></li>
					<li className='list-group-item'><a href='#/inbox/message/5/body'>Message 5</a></li>
				</ul>
				<RouteHandler />
			</div>
		);
	}
});

module.exports = App;