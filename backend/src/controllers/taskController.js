const taskService = require('../services/taskService');

const getAll = async (_req, res) => {
  try {
    const all = await taskService.getAll();
    res.status(200).json(all);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

module.exports = {
  getAll,
};
