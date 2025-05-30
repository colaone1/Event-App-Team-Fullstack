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
  const userToken = req.headers.authorization.split(' ')[1];

  console.log(userToken);

  if (!userToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userInDB = await User.findOne({ token: userToken });

  console.log(userInDB);

  if (!userInDB) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const event = new Event({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    time: req.body.time,
    userId: userInDB._id,
  });
  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
