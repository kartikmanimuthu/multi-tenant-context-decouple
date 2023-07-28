const { Router } = require('express');

const { getUsers } = require('../controllers/user')

const router = Router();
router.get('/user', getUsers);

module.exports = router;


