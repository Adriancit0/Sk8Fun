const { Router } = require('express');
const schoolControllers = require('../controllers/schoolControllers');

function schoolRouter() {
  const schoolRoutes = Router();

  schoolRoutes
    .route('/schools')
    .get(schoolControllers.getAll)
    .post(schoolControllers.createSchool);

  schoolRoutes
    .route('/schools/:schoolId')
    .delete(schoolControllers.deleteSchool)
    .put(schoolControllers.updateSchool)
    .get(schoolControllers.getSchoolData);

  return schoolRoutes;
}

module.exports = schoolRouter();
