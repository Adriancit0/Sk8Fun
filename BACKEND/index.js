const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const schoolRoutes = require('./routers/schoolRoutes');

mongoose.connect(process.env.DDBB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const server = express();
const port = 4000;
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api', schoolRoutes);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`localhost://${port}`)}`)
);
