const Task = require('../models/task');

// Resolver function to get all tasks
async function getAllTasks() {
  return await Task.find();
}

// Resolver function to create a new task
async function createTask(_, args) {
  const task = new Task({
    description: args.description,
    completed: false,
  });
  return await task.save();
}

// Resolver function to update an existing task
async function updateTask(_, args) {
  const { _id, completed } = args;
  return await Task.findByIdAndUpdate(_id, { completed }, { new: true });
}

module.exports = { getAllTasks, createTask, updateTask };