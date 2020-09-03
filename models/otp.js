('use strict');
module.exports = (sequelize, DataTypes) => {
	const otp = sequelize.define('tbl_otp', {
		otp_id_pk: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true
		},
		otp_name: DataTypes.STRING(10),
		user_email: DataTypes.STRING(55),
		d: {
			type: DataTypes.INTEGER,
			defaultValue: 1
		}
	});
	otp.associate = function(models) {
		// associations can be defined here
	};
	return otp;
};
