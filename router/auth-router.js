const router = require('express').Router();


// Controllers
const authControllers = require('../controllers/auth-controllers')


router.route('/').get(authControllers.home)

router.route('/register').get(authControllers.register)

module.exports = router;