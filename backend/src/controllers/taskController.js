const taskService = require('../services/taskService');

const getAll = async (_req, res) => {
  try {
    const all = await taskService.getAll();
    res.status(200).json(all);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

const create = async (req, res) => {
  const {
    titulo, descrição, data, hora, duração, atributo,
  } = req.body;
  try {
    const created = await taskService.create({
      titulo, descrição, data, hora, duração, atributo,
    });
    res.status(201).json(created);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const {
    titulo, descrição, data, hora, duração, atributo,
  } = req.body;
  try {
    const updated = await taskService.update(id, {
      titulo, descrição, data, hora, duração, atributo,
    });
    res.status(200).json(updated);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await taskService.deleteTask(id);
    res.status(200).json(deleted);
  } catch (err) {
    res.status(404).json(err.message);
  }
};

module.exports = {
  getAll,
  create,
  update,
  deleteTask,
};
