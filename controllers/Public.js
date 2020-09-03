const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const Op = Sequelize.Op;
const path = require('path');
const { user, otp } = require('../sequelize');
const bcrypt = require('bcrypt');
const { SECRET_KEY } = require('../config');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');

var Public = {};
const saltRounds = 10;

// Authenticate the User
Public.authenticateUser = async function(req, res, next) {
	const { user_email, user_password } = req.body;
	user
		.findOne({
			where: {
				[Op.or]: [ { user_email: user_email }, { user_name: user_email } ]
			}
		})
		.then((userObj) => {
			user.isCorrectPassword(userObj.user_id_pk, user_email, user_password, function(err, same) {
				if (err) {
					res.status(500).json({
						error: 'Internal error please try again' + err
					});
				} else if (!same) {
					res.status(401).json({
						error: 'Incorrect email or password'
					});
				} else {
					const payload = { email: user_email, room: userObj.user_name, uid: userObj.user_id_pk };
					const token = jwt.sign(payload, SECRET_KEY, {
						expiresIn: '720h'
					});
					res.cookie('auth_token', token, { maxAge: 2592000000, httpOnly: true }).sendStatus(200);
					userObj.changed('updatedAt', true);
					userObj.save();
				}
			});
		})
		.catch((err) => {
			res.status(401).json({
				error: 'Incorrect email or password'
			});
		});
};

// Add New User
Public.addUser = async function(req, res, next, uid) {
	const { user_name, user_email, user_password } = req.body;
	bcrypt.hash(user_password, saltRounds, function(err, hashedPassword) {
		user_password1 = hashedPassword;
		user
			.create({
				user_name: user_name,
				user_email: user_email,
				user_password: hashedPassword,
				d: 1
			})
			.then((obj) => {
				// const payload = { email: user_email, room: user_name, uid: obj.user_id_pk };
				// const token = jwt.sign(payload, SECRET_KEY, {
				// 	expiresIn: '720h'
				// });
				res.sendStatus(200);
				// res.status(200).send('Data Stored successfully!');
			})
			.catch((err) => {
				res.status(400).send('unable to save to database');
			});
	});
};

Public.contactus = async function(req, res, next) {
	const { name, email, query } = req.body;

	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		auth: {
			user: 'lilian70@ethereal.email',
			pass: 'rrdYuA2wVFWxyM4XDM'
		}
	});
	let info = await transporter.sendMail({
		from: '" 👻" <>', // sender address
		to: '', // list of receivers
		subject: 'COntact Us Details', // Subject line
		text: 'Following are the details of contact us, name: ' + name + ', Email: ' + email + ', Query: ' + query // plain text body
	});
	// console.log(info);
	res.status(200).send('Thank you for your response');
};

Public.generateOtp = async function(req, res, next) {
	const { email } = req.body;
	let no = otpGenerator.generate(6, { upperCase: false, specialChars: false });

	let testAccount = await nodemailer.createTestAccount();

	// create reusable transporter object using the default SMTP transport
	const transporter = nodemailer.createTransport({
		service: 'gmail',
        auth: {
        user: 'Stealthy990@gmail.com',
        pass: 'stealthy@1998'
    }
});
	// let transporter = nodemailer.createTransport({
	// 	host: 'smtp.ethereal.email',
	// 	port: 587,
	// 	secure: false, // true for 465, false for other ports
	// 	auth: {
	// 		user: testAccount.user, // generated ethereal user
	// 		pass: testAccount.pass // generated ethereal password
	// 	}
	// 	// debug: true, // show debug output
	// 	// logger: true // log information in console
	// });

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: '"Munish Tutoo👻" <Stealthy990@gmail.com>', // sender address
		to: email, // list of receivers
		subject: 'Verification OTP', // Subject line
		text: 'Your OTP is: ' + no // plain text body
	});
	// console.log(info);
	res.status(200).send('' + no);

	// await otp
	// 	.create({
	// 		otp_name: no,
	// 		user_email: otp,
	// 		d: 1
	// 	})
	// 	.then((obj) => {
	//     res.status(200).send('' + no);
	// 	})
	// 	.catch((err) => {
	// 		res.status(400).send('unable to save to database');
	// 	});
};

Public.updatePass = async function(req, res, next) {
	// await otp.update(
	// 	{
	// 		d: 0
	// 	},
	// 	{
	// 		where: {
	// 			user_email: req.body.otp
	// 		}
	// 	}
	// );
	bcrypt.hash(req.body.pass, saltRounds, function(err, hashedPassword) {
		user
			.update(
				{
					user_password: hashedPassword
				},
				{
					where: {
						user_email: req.body.email,
						d: 1
					}
				}
			)
			.then((obj) => {
				res.status(200).send('Data Updated successfully');
			})
			.catch((err) => {
				res.status(400).send('unable to update to database');
			});
	});
};

module.exports = Public;
