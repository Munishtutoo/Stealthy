const bcrypt = require('bcrypt');
const saltRounds = 10;
('use strict');
module.exports = (sequelize, DataTypes) => {
	const user = sequelize.define(
		'tbl_user_master',
		{
			user_id_pk: {
				type: DataTypes.BIGINT,
				primaryKey: true,
				autoIncrement: true
			},
			user_name: { type: DataTypes.STRING, unique: true },
			user_email: { type: DataTypes.STRING, unique: true },
			user_password: DataTypes.STRING,
			user_position: DataTypes.STRING(55),
			user_mobile: DataTypes.STRING(25),
			user_image: DataTypes.STRING,
			d: {
				type: DataTypes.INTEGER,
				defaultValue: 1
			}
		},
		{
			hooks: {
				beforeCreate: function(user) {
					bcrypt.hash(this.user_password, saltRounds, function(err, hashedPassword) {
						user.user_password = hashedPassword;
					});
				}
			},
			sequelize
		}
	);
	user.associate = function(models) {
		// associations can be defined here
	};

	user.isCorrectPassword = async function(username, password, callback) {
		await user
			.findOne({ where: { user_email: username } })
			.then((userObj) => {
				bcrypt.compare(password, userObj.user_password, function(err, same) {
					if (err) {
						callback(err);
					} else {
						callback(err, same);
					}
				});
			})
			.catch((err) => {
				callback(err);
			});
	};

	user.isCorrectPasswordByPK = async function(username, password, callback) {
		await user
			.findOne({ where: { user_id_pk: username } })
			.then((userObj) => {
				bcrypt.compare(password, userObj.user_password, function(err, same) {
					if (err) {
						callback(err);
					} else {
						callback(err, same);
					}
				});
			})
			.catch((err) => {
				callback(err);
			});
	};

	// user.isCorrectPassword = async function (username, password, callback) {
	//     const userObj = await user.findOne({ where: { user_email: username } });
	//     bcrypt.compare(password, userObj.user_password, function (err, same) {
	//         if (err) {
	//             callback(err);
	//         } else {
	//             callback(err, same);
	//         }
	//     });

	return user;
};
