var React = require('react');

var App = React.createClass({

	render: function() {
		return (
			<div className='container'>Marco</div>
		);
	}
});

module.exports = {
	start(){
		React.render(<App />, document.body);
	} 
};