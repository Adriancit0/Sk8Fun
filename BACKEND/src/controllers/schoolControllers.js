const School = require('../model/schoolModel');

module.exports = {
  createSchool: async (req, res) => {
    try {
      const school = await School.create(req.body);
      res.json(school);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const school = await School.find(req.query);
      res.json(school);
    } catch (error) {
      res.status(500);
      res.send('find error');
    }
  },
  deleteSchool: async (req, res) => {
    try {
      const { schoolId } = req.params;
      const schoolDeleted = await School.findByIdAndDelete(schoolId);
      res.json(schoolDeleted);
    } catch (error) {
      res.status(500);
      res.send('delete error');
    }
  },
  updateSchool: async (req, res) => {
    try {
      const school = await School.findByIdAndUpdate(
        req.params.schoolId,
        req.body,
        { new: true, useFindAndModify: false }
      );
      res.json(school);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },
  getSchoolData: async (req, res) => {
    const { schoolId } = req.params;
    try {
      const school = await School.findById(schoolId);
      res.json(school);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
};
