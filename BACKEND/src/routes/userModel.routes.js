const { Router } = require('express');
const userControllers = require('../controllers/user.controllers');

function userRouter() {
  const userRoutes = Router();

  userRoutes
    .route('/users')
    .get(userControllers.getAll)
    .post(userControllers.createUser);

  userRoutes
    .route('/users/:userId')
    .delete(userControllers.deleteUser)
    .put(userControllers.updateUser)
    .get(userControllers.getUserData);

  return userRoutes;
}

module.exports = userRouter();
