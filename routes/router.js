const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  postTask,
  deleteTask,
  deleteAllTasks,
} = require('../controllers/tasks');
const logRequest = require('../middleware/requestLogger');

router.route('/').get(getAllTasks).post(postTask).delete(deleteAllTasks);
router.route('/:id').delete(deleteTask);
module.exports = router;
