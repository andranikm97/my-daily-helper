const express = require('express');
const router = express.Router();
const { getAllTasks, postTask, deleteTask } = require('../controllers/tasks');
const logRequest = require('../middleware/requestLogger');

router.route('/').get(getAllTasks).post(postTask);
router.route('/:id').delete(deleteTask);
module.exports = router;
