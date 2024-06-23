const router = require('express').Router();


router.get('/', (req, res) => {
    res.status(200).send("Home Page")
})

router.get('/register', (req, res) => {
    res.status(200).send("register Page")
})

module.exports = router;