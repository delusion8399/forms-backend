const router = require('express').Router();
const bindController = require('../../utils/bindController');
const createByjuUser = require('./controllers/createByjuUser');
const exportUsers = require('./controllers/exportUsers');

router.route('/byju/register').post(bindController(createByjuUser));
router.route('/byju/export').post(bindController(exportUsers));

module.exports = router;
