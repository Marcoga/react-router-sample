var React = require('react'),
	Router = require('react-router'),
	{ HashLocation } = Router,
	routes = require('./routes/routes.jsx');

Router.run(routes, HashLocation, (Root) => {
	React.render(<Root />, document.body);
});