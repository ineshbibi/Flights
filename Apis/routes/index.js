const express = require('express');
const flightController = require('../Controllers/flightsController');
const userController = require('../Controllers/userController');
const auth = require('../middleware/auth')
const router = express.Router();

router.route('/flights').get(auth.authenticate, flightController.list);
router.route('/register').post(userController.create);
router.route('/login').post(userController.login);
module.exports = router;