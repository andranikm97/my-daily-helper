const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const postTask = async (req, res) => {
  try {
    const { content } = req.body;
    const task = await Task.create({ content });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const deletedTask = await Task.findByIdAndDelete(taskID);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteAllTasks = async (req, res) => {
  try {
    const deletedTasks = await Task.deleteMany({});
    res.status(200).json(deletedTasks);
  } catch (error) {
    res.status(500).json({ error });
  }
};
module.exports = {
  getAllTasks,
  postTask,
  deleteTask,
  deleteAllTasks,
};
