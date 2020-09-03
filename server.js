const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const logger = require('morgan');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
const { NODE_ENV, PORT, SECRET_KEY, ZONE } = require('./config');
// Include Router
const withAuth = require('./middleware');
const { user } = require('./sequelize');
var user1 = require('./routes/user');
var public = require('./routes/public');

function normalizePort(val) {
	const port = parseInt(val, 10);
	if (Number.isNaN(port)) {
		return val;
	}
	if (port >= 0) {
		return port;
	}
	return false;
}

const app = express();
const saltRounds = 10;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(
	cors({
		credentials: true
	})
);

app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(logger('dev'));
app.use('/user', withAuth, user1);
app.use('/public', public);

app.post('/api/authenticate', function(req, res) {
	const { email, password, isChecked } = req.body;
	user
		.findOne({ where: { user_email: email } })
		.then((userObj) => {
			user.isCorrectPassword(email, password, function(err, same) {
				if (err) {
					res.status(500).json({
						error: 'Internal error please try again' + err
					});
				} else if (!same) {
					res.status(401).json({
						error: 'Incorrect email or password'
					});
				} else {
					if (isChecked) {
						const payload = { email: email, uid: userObj.user_id_pk };
						const token = jwt.sign(payload, SECRET_KEY, {
							expiresIn: '720h'
						});
						res.cookie('auth_token', token, { maxAge: 2592000000, httpOnly: true }).sendStatus(200);
					} else {
						const payload = { email: email, uid: userObj.user_id_pk };
						const token = jwt.sign(payload, SECRET_KEY, {
							expiresIn: '12h'
						});
						res.cookie('auth_token', token, { maxAge: 3600000, httpOnly: true }).sendStatus(200);
					}
				}
			});
		})
		.catch((err) => {
			res.status(401).json({
				error: 'Incorrect email or password'
			});
		});
});

app.get('/checkToken', withAuth, function(req, res) {
	res.sendStatus(200);
});

app.get('/api/logout', withAuth, function(req, res) {
	res.cookie('auth_token', 'thoy', { maxAge: 60, httpOnly: true }).sendStatus(200);
});

if (NODE_ENV === 'production') {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));

	// Handle React routing, return all requests to React app
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.render('error');
});
const port = normalizePort(process.env.PORT || PORT);
app.listen(port, () => {
	console.log(`API listening on port: ${port}`);
});
