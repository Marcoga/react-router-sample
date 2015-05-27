var React = require('react'),
	{ Route } = require('react-router'),
	App = require('../components/App.jsx'),
	About = require('../components/About.jsx'),
	Inbox = require('../components/Inbox.jsx'),
	{ Message, MessageBody } = require('../components/Message.jsx');

var routes = (
	<Route handler={ App }>
		<Route path="about" handler={ About } />
		<Route path="inbox" handler={ Inbox }>
			<Route path="message/:id" handler={ Message }>
				<Route path="body" handler={ MessageBody } />
			</Route>
		</Route>
	</Route>
	);

module.exports = routes;