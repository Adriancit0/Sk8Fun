const { Router } = require('express');
const schoolController = require('../controllers/schoolControllers');

function schoolRouter() {
  const schoolRoutes = Router();

  schoolRoutes
    .route('/')
    .post(schoolController.createSchool);

  return schoolRoutes;
}
module.esports = schoolRouter();
