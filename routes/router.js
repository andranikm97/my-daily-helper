const express = require('express');
const router = express.Router();
const { getAllTasks, postTask } = require('../controllers/tasks');
const logRequest = require('../middleware/requestLogger');

router.route('/').get(getAllTasks).post(postTask);

module.exports = router;
