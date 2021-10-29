const path = require('path');
const notFound = (req, res) => {
  res
    .status(404)
    .sendFile('notFound.html', { root: path.join(__dirname, '..') });
};

module.exports = notFound;
