const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getUsers);
router.get('/:no', controller.findUser);
router.get('/search', controller.searchUsers);

module.exports = router;
