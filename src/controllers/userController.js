const userService = require('../services/userService');

exports.registerUser = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const token = await userService.login(req.body);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
