const { Schema } = require('mongoose');

const taskSchema = new Schema({
  task: String,
});

module.exports = taskSchema;
