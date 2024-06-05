const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async ({ username, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  return user;
};

exports.login = async ({ username, password }) => {
  const user = await User.findOne({ username });
  if (!user) throw new Error('User not found');
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) throw new Error('Invalid password');
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  return token;
};
