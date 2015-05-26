var React = require('react'),
	{ Route } = require('react-router');

var routes = (
	<Route handler={App}>
		<Route path="about" handler={About} />
		<Route path="inbox" handler={Inbox} />
	</Route>
	);