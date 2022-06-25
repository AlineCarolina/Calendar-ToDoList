const mongoose = require('mongoose');

const serverConnection = () => {
  mongoose.connect('mongodb://localhost:27017/db', {
    useNewUrlParser: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch((err) => {
    console.log(err);
  });
};

module.exports = serverConnection;
