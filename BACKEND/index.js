const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const debug = require('debug')('server');
require('dotenv').config();
const passport = require('passport');
const mongoose = require('mongoose');
const morgan = require('morgan');
const schoolRoutes = require('./src/routers/schoolRoutes');
const userRoutes = require('./src/routers/userRoutes');
const authRoutes = require('./src/routes/auth.routes');
const userLoginRoutes = require('./src/routes/user.routes');
require('./src/passport/jwt.strategy');
require('./src/passport/local.strategy');

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
server.use(express.urlencoded({ extended: false }));

server.use('/api', schoolRoutes);
server.use('/api', userRoutes);
server.use('/', authRoutes);
server.use('/user', passport.authenticate('jwt', { session: false }), userLoginRoutes);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`localhost://${port}`)}`)
);
