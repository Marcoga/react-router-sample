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
			</div>
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
				</ul>
				<RouteHandler />
			</div>
		);
	}
});

var routes = (
	<Route handler={ App }>
		<Route path="about" handler={ About } />
		<Route path="inbox" handler={ Inbox } />
	</Route>
	);

module.exports = {
	start(){
		Router.run(routes, HashLocation, (Root) => {
			React.render(<Root />, document.body);
		});
	} 
};