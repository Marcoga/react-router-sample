var React = require('react'),
	Well = require('./bootstrap/Well.jsx'),
	Authentication = require('../mixins/Authentication.js');

var Dashboard = React.createClass({
	mixins: [Authentication],

	render() {
		return (
			<Well>
			Dashboard
			</Well>
		);
	}

});

module.exports = Dashboard;