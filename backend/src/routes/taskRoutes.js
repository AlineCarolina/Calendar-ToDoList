const { Router } = require('express');
const taskController = require('../controllers/taskController');

const router = Router();

router.get('/', taskController.getAll);

module.exports = router;
