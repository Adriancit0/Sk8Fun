const School = require('../model/schoolModel');

module.export = {
  createSchool: async (req, res) => {
    try {
      const school = await School.create(req.body);
      res.json(school);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }

};
