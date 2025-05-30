const mongoose = require('mongoose');

// Helper to connect to test database
const connectTestDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI_TEST || 'mongodb://localhost:27017/events-app-test',
    );
  } catch (error) {
    console.error('Test database connection error:', error);
    throw error;
  }
};

// Helper to clear test database
const clearTestDB = async () => {
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
};

// Helper to close test database connection
const closeTestDB = async () => {
  await mongoose.connection.close();
};

const generateTestEvent = () => ({
  title: 'Test Event',
  description: 'This is a test event description that is long enough to test the max length rule',
  date: new Date(),
  location: 'Test Location',
  // ... existing code ...
});

module.exports = {
  connectTestDB,
  clearTestDB,
  closeTestDB,
  generateTestEvent,
};
