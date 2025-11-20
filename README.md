# GOODWORK

>A simple job board application (backend + frontend) to post, edit and manage job listings.

## Project Overview

GOODWORK is a full-stack job board application with a Node.js/Express backend and a React + Vite frontend. It provides user authentication and CRUD operations for job postings. The repository contains two main folders:

- `BACKEND/` — Express API, controllers, models, and middleware.
- `FRONTEND/GOODWORK/` — React (Vite) single-page application.

## Key Features

- User registration and login (JWT-based authentication).
- Create, read, update, and delete job postings.
- Protected routes for job management.
- Separation of concerns: controllers, routes, models, and middleware.

## Tech Stack

- Backend: Node.js, Express, Mongoose (MongoDB), JWT
- Frontend: React, Vite, Axios (for API calls)
- Dev tools: nodemon (backend dev), Vite dev server (frontend)

## Repository Structure (top-level)

- `BACKEND/`
	- `src/` — source files
		- `app.js`, `server.js` — app/server entry points
		- `config/db.js` — database connection
		- `controllers/` — `authController.js`, `jobController.js`
		- `middlewares/` — `authMiddleware.js`
		- `models/` — `User.js`, `Job.js`
		- `routes/` — `authRoutes.js`, `jobRoutes.js`
- `FRONTEND/GOODWORK/`
	- `src/` — React app
		- `App.jsx`, `main.jsx`
		- `pages/` — `Home.jsx`, `Login.jsx`, `Register.jsx`, `PostJob.jsx`, `EditJob.jsx`
		- `components/` — `Navbar.jsx`, `JobCard.jsx`
		- `api/` — `jobs.js` (API helpers)

## Environment Variables

Check the `.env` files in `BACKEND/` and `FRONTEND/GOODWORK/` for exact variable names. Common variables used by this project:

- Backend (`BACKEND/.env`)
	- `MONGO_URI` — MongoDB connection string
	- `JWT_SECRET` — secret for signing JWTs
	- `PORT` — backend server port (optional)
- Frontend (`FRONTEND/GOODWORK/.env`)
	- `VITE_API_URL` — base URL for the backend API (e.g., `http://localhost:5000/api`)

If you don't have these, create a `.env` file in each folder and set appropriate values.

## Setup & Run (Windows PowerShell)

1. Backend

```powershell
cd c:\Users\Administrator\Documents\GOODWORK\BACKEND
npm install
# For development (if the project has nodemon):
npm run dev
# Or start directly:
node src/server.js
```

2. Frontend

```powershell
cd c:\Users\Administrator\Documents\GOODWORK\FRONTEND\GOODWORK
npm install
npm run dev
```

Open the frontend dev server URL (usually `http://localhost:5173` or shown by Vite) and ensure the `VITE_API_URL` points to the backend API.

## API Endpoints (examples)

These are typical endpoints based on project routes — confirm exact paths in `BACKEND/src/routes/`:

- Auth
	- `POST /api/auth/register` — create a new user
	- `POST /api/auth/login` — authenticate and receive a JWT
- Jobs
	- `GET /api/jobs` — list jobs
	- `POST /api/jobs` — create a job (protected)
	- `GET /api/jobs/:id` — get job details
	- `PUT /api/jobs/:id` — update a job (protected)
	- `DELETE /api/jobs/:id` — delete a job (protected)

Use an `Authorization: Bearer <token>` header for protected routes.

## Development Notes

- Check `BACKEND/src/config/db.js` to configure database connection options.
- Check `BACKEND/src/middlewares/authMiddleware.js` for how JWTs are validated.
- Frontend API helpers live in `FRONTEND/GOODWORK/src/api/jobs.js`.

## Contributing

- Fork the repository and create a feature branch.
- Open a pull request and describe your changes.
- Run linters and tests (if present) before submitting.

## License

This project has no license file in the repo. If you want to open-source it, consider adding an `MIT` license or another license of your choice.

## Contact

If you want help running the project or want me to add CI, tests, or a deployment guide, tell me what you need and I can implement it.

## Documentation

Full project [documentation](https://hackmd.io/@I5OyzHQDSGWGWqeLjg1tSg/S1dUmq2eZe) detailed developer-focused technical (architecture, API, setup, deployment).
- `DOCS/PURPOSE.md` — project purpose, goals, target audience, and roadmap.

Open these files for deeper technical and product context.

