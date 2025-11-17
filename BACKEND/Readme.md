# GOODWORK - SDG8 Job Platform

**GOODWORK** is a job platform aligned with **SDG 8 (Decent Work and Economic Growth)**.
The platform allows **employers to post jobs** and **job seekers to browse and apply**. It’s built with a **MERN stack** (MongoDB, Express, React, Node.js).

---

## Project Structure

```
GOODWORK/
├─ backend/      # Node.js + Express backend
├─ frontend/     # React frontend (currently empty)

```

---

## Backend

The **backend** handles:

* User authentication (register & login)
* JWT-based authorization
* CRUD operations for jobs (create, read, update, delete)
* Duplicate prevention for job postings

### Quick Start (Backend)

1. Go to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Set environment variables in `.env`:

```
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000
```

4. Start server:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`.


5. Backend [DOCS](https://hackmd.io/@I5OyzHQDSGWGWqeLjg1tSg/H1e535dxZg)

---

## Frontend

The frontend will be a **React app** that consumes the backend API:

* API URL: `http://localhost:5000/api/`
* Will handle user login, job listing, and job posting UI.

> Frontend folder is currently empty. It will be initialized with React later.

---

## License

This project is open source and free to use.

---
