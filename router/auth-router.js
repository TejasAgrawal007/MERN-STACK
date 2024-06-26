const router = require('express').Router();


// Controllers
const authControllers = require('../controllers/auth-controllers')
const authSchema = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middleware');
const signUpSchama = require('../validators/auth-validator');


router.route('/').get(authControllers.home)


router.route('/register').post(validate(signUpSchama), authControllers.register)
router.route('/login').post(authControllers.login)

module.exports = router;