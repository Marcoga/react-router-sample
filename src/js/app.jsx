var React = require('react'),
	Router = require('react-router'),
	{ RouteHandler, HashLocation, Route } = require('react-router');

var About = React.createClass({
	render() {
		return (
			<div>
				<h2>About</h2>
			</div>
		);
	}
});

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

var Message = React.createClass({
	render() {
		return(
			<h3>This is Message: { this.props.params.id }</h3>
			);
	}
});

var App = React.createClass({

	render() {
		return (
			<div className='container'>
				<h1>App</h1>
				<ul className='list-group'>
					<li className='list-group-item'><a href='#/about'>about</a></li>
					<li className='list-group-item'><a href='#/inbox'>inbox</a></li>
					<li className='list-group-item'><a href='#/inbox/message/2'>message 2</a></li>
				</ul>
				<RouteHandler />
			</div>
		);
	}
});

var routes = (
	<Route handler={ App }>
		<Route path="about" handler={ About } />
		<Route path="inbox" handler={ Inbox }>
			<Route path="message/:id" handler={ Message } />
		</Route>
	</Route>
	);

module.exports = {
	start(){
		Router.run(routes, HashLocation, (Root) => {
			React.render(<Root />, document.body);
		});
	} 
};