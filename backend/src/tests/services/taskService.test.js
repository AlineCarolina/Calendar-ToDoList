const { expect } = require('chai');
const mongoose = require('mongoose');
const TaskModel = require('../../models/taskModel');
const taskService = require('../../services/taskService');
const taskList = require('../mocks/taskMocks');

const mongoDB = 'mongodb://127.0.0.1/my_test_database';
mongoose.connect(mongoDB);

describe('Teste taskService', () => {
  before(async () => {
    await TaskModel.remove({});
  });

  after(async () => {
    await TaskModel.remove({});
    await mongoose.connection.close();
  });

  it('TaskService retorna um array', async () => {
    const task = new TaskModel(taskList);
    await task.save();

    const service = await taskService.getAll();
    expect(service).to.be.an('array');
  });
});
