const { Schema } = require('mongoose');

const taskSchema = new Schema({
  titulo: String,
  descrição: String,
  data: String,
  hora: String,
  duração: String,
});

module.exports = taskSchema;
