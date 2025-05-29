# Events App

A full-stack application combining a Next.js frontend with an Express/Node.js backend.

## Project Structure

```
events-app/
├── frontend/     (Next.js frontend)
└── backend/      (Express/Node.js backend)
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Frontend Setup

1. Clone the frontend repository:
```bash
git clone https://github.com/colaone1/Event-App-Team-Project-FE.git frontend
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment variables:
Create a `.env.local` file in the frontend directory with:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Update API client configuration:
Ensure the `apiClient.js` is configured to point to the backend URL and includes proper error handling.

### Backend Setup

1. Clone the backend repository:
```bash
git clone https://github.com/colaone1/Event-App-Team-Project-BE.git backend
cd backend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure environment variables:
Create a `.env` file in the backend directory with:
```
PORT=3001
DATABASE_URL=your_database_url
CORS_ORIGIN=http://localhost:3000
```

4. Configure CORS:
Ensure the backend is configured to accept requests from the frontend.

## Running the Project

### Development Mode

1. Start the backend:
```bash
cd backend
npm run dev
# or
yarn dev
```

2. Start the frontend (in a new terminal):
```bash
cd frontend
npm run dev
# or
yarn dev
```

The frontend will be available at `http://localhost:3000`
The backend will be available at `http://localhost:3001`

### Production Mode

1. Build the frontend:
```bash
cd frontend
npm run build
# or
yarn build
```

2. Start the backend:
```bash
cd backend
npm start
# or
yarn start
```

## Environment Variables

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL`: Backend API URL (default: http://localhost:3001)

### Backend (.env)
- `PORT`: Server port (default: 3001)
- `DATABASE_URL`: Database connection string
- `CORS_ORIGIN`: Frontend URL for CORS (default: http://localhost:3000)

## API Documentation

The backend API endpoints will be documented here. Please refer to the backend repository for detailed API documentation.

## Additional Configuration

### Optional Enhancements
- Set up concurrently to run both services with one command
- Add Docker configuration for easy deployment
- Set up proper logging
- Add API documentation

## Contributing

Please refer to the contributing guidelines in each repository for specific instructions.

## License

This project is licensed under the MIT License - see the LICENSE file for details. 