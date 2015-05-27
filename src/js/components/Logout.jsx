var React = require('react'),
	Well = require('./bootstrap/Well.jsx'),
	auth = require('../Authentication/Auth.js');

var Logout = React.createClass({
	componentDidMount(){
		auth.logout();
	},

	render() {
		return (
			<Well>
			You are now logged out
			</Well>
		);
	}

});

module.exports = Logout;