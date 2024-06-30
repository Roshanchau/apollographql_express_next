const mongoose = require('../db');

const taskSchema = new mongoose.Schema({
  description: String,
  completed: Boolean,
});

module.exports = mongoose.model('Task', taskSchema);