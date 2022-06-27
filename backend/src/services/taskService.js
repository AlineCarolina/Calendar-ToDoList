const Task = require('../models/taskModel');

const getAll = async () => {
  const all = await Task.find();
  return all;
};

const create = async ({
  titulo, descrição, data, hora, duração, atributo,
}) => {
  const newTask = new Task({
    titulo, descrição, data, hora, duração, atributo,
  });
  const created = await newTask.save();
  return created;
};

const update = async (id, {
  titulo, descrição, data, hora, duração, atributo,
}) => {
  const updated = await Task.findByIdAndUpdate(id, {
    titulo, descrição, data, hora, duração, atributo,
  });
  return updated;
};

const deleteTask = async (id) => {
  const deleted = await Task.findByIdAndDelete(id);
  return deleted;
};

module.exports = {
  getAll,
  create,
  update,
  deleteTask,
};
