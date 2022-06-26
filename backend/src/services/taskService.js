const Task = require('../models/taskModel');

const getAll = async () => {
  const all = await Task.find();
  return all;
};

module.exports = {
  getAll,
};
