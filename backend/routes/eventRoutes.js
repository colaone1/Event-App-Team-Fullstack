const express = require('express');
const router = express.Router();
const { getEvents, addEvent, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const auth = require('../middleware/auth');

// Get all events
router.get('/', getEvents);

// Get event by ID
router.get('/:id', getEventById);

// Create new event
router.post('/', auth, addEvent);

// Update event by ID
router.put('/:id', auth, updateEvent);

// Delete event by ID
router.delete('/:id', auth, deleteEvent);

module.exports = router;
