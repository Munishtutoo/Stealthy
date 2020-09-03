var express = require('express');
var router = express.Router();
var User = require('../controllers/User');

// Get current user details by user_id_pk
router.post('/getOne', function(req, res, next) {
	User.getOne(req, res, next);
});

// Update user by user_id_pk
router.post('/update', function(req, res, next) {
	User.update(req, res, next);
});

// Update user password by user_id_pk
router.post('/updatePassword', function(req, res, next) {
	User.updatePassword(req, res, next);
});

module.exports = router;
