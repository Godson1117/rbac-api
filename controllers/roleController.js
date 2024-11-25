const Role = require('../models/roleModel');

exports.createRole = async (req, res) => {
  const { name, permissions } = req.body;

  try {
    const role = await Role.create({ name, permissions });
    res.status(201).json({ message: 'Role created', role });
  } catch (error) {
    res.status(500).json({ message: 'Error creating role', error });
  }
};
