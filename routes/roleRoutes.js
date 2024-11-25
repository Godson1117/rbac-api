const express = require('express');
const { createRole } = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');
const rbacMiddleware = require('../middleware/rbacMiddleware');
const router = express.Router();

router.post('/', authMiddleware, rbacMiddleware(['HR']), createRole);

module.exports = router;
