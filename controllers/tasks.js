const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
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

module.exports = {
  getAllTasks,
  postTask,
};
