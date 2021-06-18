const express = require('express');
const cors = require('cors');
const debug = require('debug')('server');
const chalk = require('chalk');
const morgan = require('morgan');
const passport = require('passport');

require('dotenv').config();

require('./src/config/ddbb.config');
require('./src/passport/jwt.strategy');
require('./src/passport/local.strategy');

const schoolRoutes = require('./src/routes/school.routes');
// const userModelRoutes = require('./src/routes/userModel.routes');
const authRoutes = require('./src/routes/auth.routes');
const userLoginRoutes = require('./src/routes/user.routes');

const server = express();
const port = process.env.PORT || 4000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/', authRoutes);

server.use(
  '/funnySk8',
  // passport.authenticate('jwt', { session: false }),
  schoolRoutes
);
// server.use(
//   '/funnySk8',
//   // passport.authenticate('jwt', { session: false }),
//   userModelRoutes
// );
server.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  userLoginRoutes
);

server.listen(
  port,
  () => debug(`Server is running on ${chalk.yellow(`localhost://${port}`)}`)
);
