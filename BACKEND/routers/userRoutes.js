const { Router } = require('express');
const userControllers = require('../controllers/userControllers');

function userRouter() {
  const userRoutes = Router();

  userRoutes
    .route('/users')
    .get(userControllers.getAll)
    .post(userControllers.createUser);

  userRoutes
    .route('/users/:schoolId')
    .delete(userControllers.deleteUser)
    .put(userControllers.updateUser)
    .get(userControllers.getUserData);

  return schoolRoutes;
}

module.exports = userRouter();
