# Events App

A full-stack event management application with a Next.js frontend and an Express/MongoDB backend.

---

## Project Structure
```
Events Team FULLSTACK/
├── frontend/   # Next.js frontend
└── backend/    # Express.js backend
```

---

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git
- MongoDB Atlas account (for backend)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <your-repo-url> .
cd Events Team FULLSTACK
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in `backend/` with:
```
PORT=3001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:3000
```
Start the backend:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```
Create a `.env.local` file in `frontend/` with:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```
Start the frontend:
```bash
npm run dev
```

- The frontend will be available at [http://localhost:3000](http://localhost:3000)
- The backend will be available at [http://localhost:3001](http://localhost:3001)

---

## How to Use the Site Locally
1. **Register:** Go to `/register` and create a new account.
2. **Login:** Go to `/login` and sign in.
3. **View Events:** Visit `/events` to see all events.
4. **Create Event:** Click "Create New Event" on the Events page. Fill in the form and submit.
5. **Edit/Delete Events:** Use the Edit/Delete buttons on each event card (only for your own events).
6. **Navigate:** Use the Home button on the Events page to return to the homepage.

---

## Deployment
- **Backend:** Deploy to [Render](https://render.com), [Railway](https://railway.app), or [Heroku](https://heroku.com).
- **Frontend:** Deploy to [Vercel](https://vercel.com) (recommended for Next.js) or [Netlify](https://netlify.com).
- **Update the frontend `.env.local`** with your deployed backend URL after deployment.

---

## Environment Variables
- **Frontend:** `NEXT_PUBLIC_API_URL` (backend API URL)
- **Backend:** `PORT`, `MONGODB_URI`, `JWT_SECRET`, `CORS_ORIGIN`

---

## Features
- User registration & login (JWT authentication)
- Create, view, edit, and delete events
- Protected routes for authenticated users
- Accessible, modern UI

---

## License
MIT 