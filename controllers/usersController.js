const users = require('../models/users');

// Get all users
exports.getAllUsers = (req, res) => {
  res.json(users);
};

// Get user by ID
exports.getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
};

// Create a new user
exports.createUser = (req, res) => {
  const { username, email } = req.body;
  const newUser = { id: users.length + 1, username, email };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Update user
exports.updateUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const { username, email } = req.body;
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[userIndex] = { ...users[userIndex], username, email };
  res.json(users[userIndex]);
};

// Delete user
exports.deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.status(204).send();
};
