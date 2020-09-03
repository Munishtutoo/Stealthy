const bcrypt = require('bcrypt');
const path = require('path');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { user } = require('../sequelize');
const saltRounds = 10;

var User = {};

// Get current user details by user_id_pk
User.getOne = async function(req, res, next) {
	user.findOne({ where: { user_id_pk: req.uid } }).then((userObj) => {
		var result = [];
		result.push({
			user_id_pk: userObj.user_id_pk,
			user_name: userObj.user_name
		});
		res.status(200).send(JSON.stringify(result, null, 2));
	});
};

// Update user by user_id_pk
User.update = async function(req, res, next) {
	const user_id_fk = req.uid;
	const { user_id_pk, user_name, user_email, user_position, user_mobile, user_image } = req.body;

	await user
		.update(
			{
				user_name: user_name,
				user_email: user_email,
				user_position: user_position,
				user_mobile: user_mobile,
				user_image: user_image,
				d: 1
			},
			{
				where: {
					user_id_pk: user_id_pk,
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
};

// Update user Password by user_id_pk
User.updatePassword = async function(req, res, next) {
	const user_id_fk = req.uid;
	const { currentPassword, newPassword } = req.body;

	user
		.findOne({ where: { user_id_pk: user_id_fk } })
		.then((userObj) => {
			user.isCorrectPasswordByPK(user_id_fk, currentPassword, function(err, same) {
				if (err) {
					res.status(500).json({
						error: 'Internal error please try again' + err
					});
				} else if (!same) {
					res.status(401).json({
						error: 'Incorrect email or password'
					});
				} else {
					bcrypt.hash(newPassword, saltRounds, function(err, hashedPassword) {
						user
							.update(
								{
									user_password: hashedPassword,
									d: 1
								},
								{
									where: {
										user_id_pk: user_id_fk,
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
				}
			});
		})
		.catch((err) => {
			res.status(401).json({
				error: 'Incorrect email or password'
			});
		});
};

module.exports = User;
