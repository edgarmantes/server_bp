const Authentication = require('./controllers/authentication');
const passortService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSiginin = passport.authenticate('local', { session: false });

module.exports = function(app){

	app.get('/', requireAuth, function(req, res) {
		res.send({ hi: 'there' });
	})
	
	app.post('/signin', requireSiginin, Authentication.signin);
	app.post('/signup', Authentication.signup );
}