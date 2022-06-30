const mongoose = require('mongoose');

/* mongodb://root:12345@db:27017/db?authSource=admin */

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
