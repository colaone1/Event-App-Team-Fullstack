const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Event name is required'],
    trim: true,
  },
  location: {
    type: String,
    required: [true, 'Event location is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Event description is required'],
    trim: true,
  },
  dateTime: {
    type: Date,
    required: [true, 'Event date and time is required'],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

// Index for efficient querying
eventSchema.index({ dateTime: 1 });
eventSchema.index({ location: 1 });
eventSchema.index({ name: 'text' });

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
