var express = require('express');
var router = express.Router();
var Public = require('../controllers/Public');

// Add New Customer
router.post('/user/authenticate', function(req, res, next) {
	Public.authenticateUser(req, res, next);
});

// Add New Customer
router.post('/user/add', function(req, res, next) {
	Public.addUser(req, res, next);
});

// Add New Customer
router.post('/user/generateOtp', function(req, res, next) {
	Public.generateOtp(req, res, next);
});

// Add New Customer
router.post('/user/updatePass', function(req, res, next) {
	Public.updatePass(req, res, next);
});

// Add New Customer
router.post('/user/contactus', function(req, res, next) {
	Public.contactus(req, res, next);
});

module.exports = router;
