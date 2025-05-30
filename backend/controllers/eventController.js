const Event = require('../Models/Event');
const User = require('../Models/User');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addEvent = async (req, res) => {
  // req.user is set by the auth middleware
  const userId = req.user.userId;

  if (!userId) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const event = new Event({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    dateTime: req.body.dateTime, // expects a single ISO string or Date
    createdBy: userId,
  });
  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
