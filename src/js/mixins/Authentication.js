var auth = require('../Authentication/Auth.js');

var Authentication = {
  statics: {
    willTransitionTo: function (transition) {
      var nextPath = transition.path;

      if (!auth.loggedIn()) {
        transition.redirect('/login', {}, { 'nextPath' : nextPath });
      }
    }
  }
};

module.exports = Authentication;