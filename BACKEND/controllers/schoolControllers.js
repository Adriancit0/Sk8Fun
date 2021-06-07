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
  }
};
