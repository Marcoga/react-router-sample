var React = require('react');

var Well = React.createClass({

	render: function() {
		return (
			<div className='well'>
				{ this.props.children }
			</div>
		);
	}

});

module.exports = Well;