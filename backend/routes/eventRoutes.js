const express = require('express');
const router = express.Router();
const { getEvents, addEvent } = require('../controllers/eventController');
const auth = require('../middleware/auth');

// Get all events
router.get('/', getEvents);

// Create new event
router.post('/', auth, addEvent);

module.exports = router;
