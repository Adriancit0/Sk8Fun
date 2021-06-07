const { Router } = require('express');
const schoolControllers = require('../controllers/schoolControllers');
const schoolController = require('../controllers/schoolControllers');

function schoolRouter() {
  const schoolRoutes = Router();

  schoolRoutes
    .route('/')
    .get(schoolControllers.getAll)
    .post(schoolController.createSchool);

  return schoolRoutes;
}

module.exports = schoolRouter();
