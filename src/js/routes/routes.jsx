var React = require('react'),
	{ Route, NotFoundRoute, DefaultRoute } = require('react-router'),
	App = require('../components/App.jsx'),
	About = require('../components/About.jsx'),
	Inbox = require('../components/Inbox.jsx'),
	Dashboard = require('../components/Dashboard.jsx'),
	Login = require('../components/Login.jsx'),
	Logout = require('../components/Logout.jsx'),
	NotFound = require('../components/NotFound.jsx'),
	{ Message, MessageBody } = require('../components/Message.jsx');

var routes = (
	<Route handler={ App }>
		<Route path="login" handler={ Login } />
		<Route path="logout" handler={ Logout } />
		<Route path="dashboard" handler={ Dashboard } />
		<Route path="about" handler={ About } />
		<Route path="inbox" handler={ Inbox }>
			<Route path="message/:id" handler={ Message }>
				<Route path="body" handler={ MessageBody } />
			</Route>
		</Route>
		<DefaultRoute handler={ Inbox }/>
		<NotFoundRoute handler={ NotFound }/>
	</Route>
	);

module.exports = routes;