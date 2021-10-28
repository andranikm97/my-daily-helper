const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  content: {
    type: String,
    required: [true, 'must provide text'],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Task', taskSchema);
