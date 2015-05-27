var React = require('react'),
	auth = require('../Authentication/Auth.js');

var Login = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function () {
    return {
      error: false
    };
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var { router } = this.context;
    var nextPath = router.getCurrentQuery().nextPath;
    var username = this.refs.username.getDOMNode().value;
    var pass = this.refs.pass.getDOMNode().value;

    auth.login(username, pass, function (loggedIn) {
      if (!loggedIn)
        return this.setState({ error: true });

      if (nextPath) {
        router.replaceWith(nextPath);
      } else {
        router.replaceWith('/');
      }
    }.bind(this));
  },

  render: function () {
    var errors = this.state.error ? <p>Bad login information</p> : '';
    
    return (
		<div className="login-card">
    		<h1>Log-in</h1><br/>
    		<form onSubmit={this.handleSubmit}>
    			<input ref="username" type="text" placeholder="username" defaultValue="marco" />
    			<input ref="pass" type="password" placeholder="password"/>
    			<input type="submit" name="login" className="login login-submit" value="login" />
    			{errors}
			</form>
		</div>
    );
  }
});

module.exports = Login;