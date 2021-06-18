const User = require('../model/userModel');

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await User.find(req.query);
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send('find error');
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const userDeleted = await User.findByIdAndDelete(userId);
      res.json(userDeleted);
    } catch (error) {
      res.status(500);
      res.send('delete error');
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        req.body,
        { new: true, useFindAndModify: false }
      );
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  },
  getUserData: async (req, res) => {
    const { userEmail } = req.headers.userdata;
    console.log(userEmail);
    try {
      const user = await User.findById(userEmail);
      console.log(`funciona${user}`);
      res.json(user);
    } catch (error) {
      res.status(500);
      res.send(error);
    }
  }
};
