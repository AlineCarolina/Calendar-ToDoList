const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const serverConnection = require('./server');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3000;

serverConnection();

app.use(bodyParser.json());

app.use(cors());

app.listen(port, () => console.log(`Online: ${port}`));
