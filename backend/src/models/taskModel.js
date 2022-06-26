const mongoose = require('mongoose');
const taskSchema = require('../schemas/taskSchema');

const Task = mongoose.model('List', taskSchema);

module.exports = Task;
