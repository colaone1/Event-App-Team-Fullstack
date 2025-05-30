# Event App Team Project - Backend

A robust backend API for the Event App, built with Node.js, Express, and MongoDB. This API provides endpoints for event management, user authentication, and CRUD operations.

## 🚀 Features

- **User Authentication**
  - Secure user registration and login
  - JWT-based authentication
  - Protected routes for authorized users

- **Event Management**
  - Create, read, update, and delete events
  - Event filtering and search capabilities
  - Location-based event discovery

- **Database Integration**
  - MongoDB Atlas for reliable data storage
  - Mongoose ODM for data modeling
  - Efficient indexing and querying

- **Testing**
  - Jest for unit testing
  - Supertest for API endpoint testing
  - Mocked database connections for tests

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB Atlas
- **ODM:** Mongoose
- **Testing:** Jest, Supertest
- **Code Quality:** ESLint, Husky
- **Authentication:** JWT
- **Environment:** dotenv

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Git

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/colaone1/Event-App-Team-Project-BE.git
   cd Event-App-Team-Project-BE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Event Endpoints

- `GET /api/events` - Get all events
- `POST /api/events` - Create new event
- `GET /api/events/:id` - Get event by ID
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

## 🧪 Testing

The project uses Jest for testing. Run tests with:
```bash
npm test
```

Test files are located in the `tests` directory:
- `tests/health.test.js` - Health check endpoint tests
- `tests/setup/` - Test setup and utilities
- `tests/utils/` - Test helper functions

## 📦 Project Structure

```
├── config/         # Configuration files
├── controllers/    # Route controllers
├── models/         # Database models
├── routes/         # API routes
├── tests/          # Test files
├── utils/          # Utility functions
├── .env           # Environment variables
├── .eslintrc.json # ESLint configuration
├── index.js       # Application entry point
└── package.json   # Project dependencies
```

## 🤝 Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run tests and ensure they pass
4. Submit a pull request

## 📝 Code Style

The project uses ESLint for code style enforcement. Run linting with:
```bash
npm run lint
```

## 🔒 Security

- Passwords are hashed using bcrypt
- JWT tokens for authentication
- Environment variables for sensitive data
- Input validation and sanitization

## 👥 Team Members

- [Add team members here]

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔄 Frontend Integration

### Authentication Flow
1. Frontend sends login credentials to `POST /api/auth/login`
2. Backend validates credentials and returns JWT token
3. Frontend stores token and uses it for authenticated requests

### Event Management Flow
1. **View Events**
   ```http
   GET /api/events
   Authorization: Bearer <jwt_token>
   ```
   Response:
   ```json
   {
     "events": [
       {
         "id": "string",
         "name": "string",
         "location": "string",
         "description": "string",
         "dateTime": "string",
         "createdBy": "string"
       }
     ]
   }
   ```

2. **Create Event**
   ```http
   POST /api/events
   Authorization: Bearer <jwt_token>
   Content-Type: application/json

   {
     "name": "string",
     "location": "string",
     "description": "string",
     "dateTime": "string"
   }
   ```

3. **Update Event**
   ```http
   PUT /api/events/:id
   Authorization: Bearer <jwt_token>
   Content-Type: application/json

   {
     "name": "string",
     "location": "string",
     "description": "string",
     "dateTime": "string"
   }
   ```

4. **Delete Event**
   ```http
   DELETE /api/events/:id
   Authorization: Bearer <jwt_token>
   ```

### Search and Filter
1. **Search by Location**
   ```http
   GET /api/events?location=<location>
   Authorization: Bearer <jwt_token>
   ```

2. **Filter by Date**
   ```http
   GET /api/events?date=<date>
   Authorization: Bearer <jwt_token>
   ```

3. **Search by Name**
   ```http
   GET /api/events?name=<name>
   Authorization: Bearer <jwt_token>
   ```

### Error Handling
All endpoints return appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Server Error

Error Response Format:
```json
{
  "error": {
    "message": "string",
    "code": "string"
  }
}
```
