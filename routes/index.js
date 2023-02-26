const router = require('express').Router();

router.use('/user', require('../modules/user/routes'));

module.exports = router;
