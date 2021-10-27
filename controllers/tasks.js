const getAllTasks = (req, res) => {
  res.send('Get all tasks');
};

const postTask = (req, res) => {
  res.send('Post task');
};

module.exports = {
  getAllTasks,
  postTask,
};
