// Global test setup
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

// Load .env.test if it exists
const envTestPath = path.resolve(process.cwd(), '.env.test');
if (fs.existsSync(envTestPath)) {
  require('dotenv').config({ path: envTestPath });
}

process.env.NODE_ENV = 'test';

// Mock mongoose connection
jest.mock('mongoose', () => {
  const originalModule = jest.requireActual('mongoose');
  return {
    ...originalModule,
    connect: jest.fn().mockResolvedValue({
      connection: {
        host: 'test-db',
        close: jest.fn().mockResolvedValue(undefined),
      },
    }),
    connection: {
      readyState: 1,
      close: jest.fn().mockResolvedValue(undefined),
    },
  };
});

// Add any global test setup here
beforeAll(async () => {
  // No need to connect to real database
});

afterAll(async () => {
  // Clean up any remaining connections
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
  }
  // Clear all mocks
  jest.clearAllMocks();
  // Force process to exit after tests
  setTimeout(() => process.exit(0), 1000);
});

// Add any global test utilities here
global.testUtils = {
  // Add your test utilities here
};
