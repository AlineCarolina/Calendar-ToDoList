const { expect } = require('chai');
const mongoose = require('mongoose');
const TaskModel = require('../../models/taskModel');

const mongoDB = 'mongodb://127.0.0.1/my_test_database';
mongoose.connect(mongoDB);

describe('Teste taskModel', () => {
  before(async () => {
    await TaskModel.remove({});
  });

  after(async () => {
    await TaskModel.remove({});
    await mongoose.connection.close();
  });

  it('deve criar uma nova tarefa no DB', async () => {
    const task = new TaskModel({ task: 'tarefa' });
    await task.save();

    const foundTask = await TaskModel.findOne({ task: 'tarefa' });
    expect(foundTask).to.be.an('object');
  });
});
