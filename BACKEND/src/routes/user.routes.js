const { Router } = require('express');
const userController = require('../controllers/user.controller');

function userRouter() {
  const userRoutes = Router();

  userRoutes
    .route('/profile')
    .get(userController.getProfile);

  return userRoutes;
}

module.exports = userRouter;
