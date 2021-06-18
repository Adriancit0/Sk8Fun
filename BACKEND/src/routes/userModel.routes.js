const { Router } = require('express');
const userControllers = require('../controllers/user.controllers');

function userRouter() {
  const userRoutes = Router();

  userRoutes
    .route('/users')
    .get(userControllers.getUserData)
    .post(userControllers.createUser);

  userRoutes
    .route('/users/:userId')
    .delete(userControllers.deleteUser)
    .put(userControllers.updateUser);

  return userRoutes;
}

module.exports = userRouter();
