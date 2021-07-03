const passport = require('passport');
const { Router } = require('express');
const authController = require('../controllers/auth.controllers')();

const authRoutes = Router();

authRoutes.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  authController.singUp
);

authRoutes.post(
  '/login',
  authController.logIn
);

authRoutes.post(
  '/token',
  authController.getToken
);

authRoutes.post(
  '/logout',
  authController.logOut
);

module.exports = authRoutes;
